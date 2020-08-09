import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "./actions";
import "./PostForm.css";

const PostForm = ({ post, editPost = () => null }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const INITIAL_FORM_STATE = post
    ? {
        title: post.title,
        body: post.body,
        description: post.description,
      }
    : {
        title: "",
        body: "",
        description: "",
      };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      editPost(post.id, formData);
    } else {
      dispatch(addPost(formData));
    }
    history.push("/");
  };

  const { title, body, description } = formData;

  return (
    <div className="PostForm">
      <div className="justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              type="textarea"
              className="form-control"
              name="body"
              value={body}
              onChange={handleChange}
              rows="10"
            ></textarea>
          </div>
          <div className="button-group d-flex">
            <button type="submit" className="btn btn-primary mr-2">
              Save
            </button>
            <Link to={`/`} className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
