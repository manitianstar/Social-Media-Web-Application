import { createContext, useReducer, useCallback, useState,useEffect } from "react";
// import PostList from "../components/PostList";
export const PostList=createContext({
    postList: [],
    fetching: false,
    addPost: ()=>{},
    deletePost: ()=>{},
});
const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
     newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
    }
    else if(action.type==="ADD_INITIAL_POSTS"){
        newPostList=action.payload.posts;
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList];
    }
    return newPostList;
}
const PostListProvider=({children})=>{
    const [postList,dispachPostList]= useReducer(
        postListReducer,[]
    );
    const [fetching, setFetching] = useState(false);

  
    const addPost=(post)=>{
        dispachPostList({
            type: 'ADD_POST',
            payload: post,
        })
    }

    const addInitialPosts=(posts)=>{
        dispachPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
               posts,
            }
        })
    }

    const deletePost=useCallback((postId)=>{
    dispachPostList({
        type: "DELETE_POST",
        payload: {
            postId,
        }
    })
    },
    [dispachPostList]
    );
    useEffect(() => {
        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;
    
        fetch("https://dummyjson.com/posts", { signal })
          .then((res) => res.json())
          .then((data) => {
            addInitialPosts(data.posts);
            setFetching(false);
          });
    
        return () => {
          console.log("Cleaning up UseEffect.");
          controller.abort();
        };
      }, []);
    return <PostList.Provider value={{postList,fetching,addPost,deletePost}
    }>{children}</PostList.Provider>
};

export default PostListProvider;