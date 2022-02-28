import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createPost } from "../services/postsService";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createPost({ title, content, published });
      console.log(data);
      toast("Post created successsfully");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h6 className="text-success">New post</h6>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Post title"
              aria-label="Post title"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Post Content"
              aria-label="Post Content"
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="published"
                name="published"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />
              <label class="form-check-label" htmlFor="published">
                Published ?
              </label>
            </div>
          </div>

          <div className="col-md-4">
            <button type="submit" class="btn btn-success">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
