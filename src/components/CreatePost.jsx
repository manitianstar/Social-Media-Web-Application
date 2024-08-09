import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost=()=>{
  const {addPost}=useContext(PostList);
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const bodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const PostBody=bodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postTitleElement.current.value="";
    bodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title:postTitle,
        body:PostBody,
        reactions:reactions,
        userId: userId,
        tags: tags,
    })
    })
    .then(res => res.json())
    .then((resObj)=>addPost(resObj));
  }
return <form className="create-post" onSubmit={handleSubmit}>
  <div class="mb-3">
  <label for="userId" class="form-label">Enter your User Id here</label>
  <input type="text" 
  ref={userIdElement}
  class="form-control" id="title" 
  placeholder="Enter UserId"/>
</div>
<div class="mb-3">
  <label for="title" class="form-label">Post- Title</label>
  <input type="text"
  ref={postTitleElement} class="form-control" id="title" 
  placeholder="How are you feeling today"/>
</div>
<div class="mb-3">
  <label for="body" class="form-label">Post Content</label>
  <textarea type="text" rows="4" 
  ref={bodyElement}
  className="form-control" id="body" 
  placeholder="Tell us more about it"/>
</div>
<div class="mb-3">
  <label for="reactions" class="form-label">Number of Reactions</label>
  <input type="text" ref={reactionsElement} class="form-control" id="title" 
  placeholder="How many people rreacted to this post"/>
</div>
<div class="mb-3">
  <label for="tags" class="form-label">Enter your Hashtags here</label>
  <input type="text" ref={tagsElement} class="form-control" id="tags" 
  placeholder="Enter HashTags"/>
</div>
<button type="submit" class="btn btn-primary">Post</button>
</form>
}
export default CreatePost;