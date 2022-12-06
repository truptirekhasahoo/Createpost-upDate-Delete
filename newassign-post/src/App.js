import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost([response.data]);
      });
  }

  function updatePost(event) {
    let postId = event.currentTarget.id
    console.log(postId)
    axios
      .put(`${baseURL}/${postId}`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost([response.data]);
      });
  }

  function deletePost(event) {
    let postId = event.currentTarget.id
    console.log(postId)
    axios
      .delete(`${baseURL}/${postId}`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then(() => {
        setPost(null);
      });
  }

  if (!post) return "No post!";

  return (
    <div>{post.map((postObject) => (
      
      <div class="card border-primary mb-3">
       <div class="card-body text-primary">
        <h1 class='card-title'>{postObject.title}</h1>
        <p class='card-text'>{postObject.body}</p>
        <button onClick={createPost}>Create</button>
        <button id={postObject.id} onClick={updatePost}>Update</button>
        <button id={postObject.id} onClick={deletePost}>Delete</button>
        </div>
        
        
        
      </div>
    ))}
    </div>

  );
}
