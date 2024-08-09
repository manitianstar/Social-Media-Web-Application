import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post=({post })=>{
const {deletePost}=useContext(PostList);
// const  [count ,  setCount  ] =  useState(0) ;   

return <div class="card post-card" style={{width: "18rem"}}>
<div class="card-body">
  <h5 class="card-title">{post.title}
  <span key ={post}class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}><MdDelete /></span>
  </h5>
  <p class="card-text">{post.body}</p>
  
  {post.tags.map((tag)=>{
    // setCount(count +1)
    (
     <span key={tag} class="badge text-bg-primary hashtag">{tag}</span>
      
  )
  })} 
  <div class="alert alert-success reactions" role="alert">
This post has been reacted by {post.reactions.likes} people
</div>
</div>
</div>
}
export default Post;