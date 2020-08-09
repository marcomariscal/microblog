import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState({ text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment({ text: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment"></label>
          <input
            type="text"
            className="form-control"
            name="text"
            value={comment.text}
            onChange={handleChange}
            placeholder="New Comment"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary d-flex justify-content-start"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
