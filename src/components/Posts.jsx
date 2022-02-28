import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAllPosts, deletePost } from "../services/postsService";
import PostForm from "./PostFrom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let { data: _data } = await getAllPosts();

      const _posts = [..._data];
      setPosts(_posts);
      // console.log(_posts);
    };
    fetchPosts();
  }, []);

  const handelDelete = async (post) => {
    try {
      const response = await deletePost(post.id);
      const _posts = [...posts];

      const _new_posts = _posts.filter((p) => p.Post.id !== post.id);
      setPosts(_new_posts);

      toast("Successfully deleted");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Owner</th>
            <th scope="col">Date Created</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p, index) => (
            <tr key={index}>
              <th>{p.Post.title}</th>
              <td>{p.Post.content}</td>
              <td>{p.Post.owner.email}</td>
              <td>{p.Post.owner.created_at.slice(0, 10)}</td>
              <td>
                <i
                  className="fa fa-trash text-danger"
                  style={{ cursor: "pointer" }}
                  title="Delete"
                  onClick={() => handelDelete(p.Post)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="list-group">
        {posts.map((p, index) => (
          <a
            href="#"
            className="list-group-item list-group-item-action my-2"
            key={index}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                {p.Post.title}
                {}
              </h5>
              <small className="text-muted">
                {p.Post.created_at.slice(0, 10)}
              </small>
            </div>
            <p className="mb-1">{p.Post.content}</p>
            <small className="text-muted">And some muted small print.</small>
          </a>
        ))}
      </div> */}

      <PostForm />
    </>
  );
};

export default Posts;
