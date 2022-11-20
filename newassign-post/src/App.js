
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
      <div>
        <h1>{postObject.title}</h1>
        <p>{postObject.body}</p>
        <button onClick={createPost}>Create Post</button>
        <button id={postObject.id} onClick={updatePost}>Update Post</button>
        <button id={postObject.id} onClick={deletePost}>Delete Post</button>
      </div>
    ))}
    </div>

  );
}
