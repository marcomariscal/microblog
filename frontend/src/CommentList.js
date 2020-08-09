import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, deleteComment }) => {
  return (
    <div className="Comments">
      <h6 className="d-flex justify-content-start">Comments</h6>
      {comments.map(({ id, text }) => (
        <Comment text={text} deleteComment={deleteComment} key={id} id={id} />
      ))}
    </div>
  );
};

export default CommentList;
