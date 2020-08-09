import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ id, text, deleteComment }) => {
  return (
    <div className="Comment my-1 d-flex flex-row">
      <button onClick={() => deleteComment(id)} className="mr-2">
        <FontAwesomeIcon icon={faTimes} size="lg" color="red" />
      </button>
      <p className="mb-auto">{text}</p>
    </div>
  );
};

export default Comment;
