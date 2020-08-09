import React from "react";
import Votes from "./Votes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./PostDisplay.css";

const PostDisplay = ({ post, toggleEditPost, deletePost, vote }) => {
  const { title, description, body } = post;

  return (
    <div className="PostDisplay">
      <h1>{title}</h1>
      <div className="d-flex justify-content-end">
        <button className="mx-2" onClick={toggleEditPost}>
          <FontAwesomeIcon icon={faEdit} size="lg" color="blue" />
        </button>
        <button onClick={deletePost}>
          <FontAwesomeIcon icon={faTimes} size="lg" color="red" />
        </button>
      </div>
      <div className="d-flex justify-content-end mt-2">
        <Votes id={post.id} vote={vote} upVoteCount={post.votes} />
      </div>
      <p>
        <i>{description}</i>
      </p>
      <p>{body}</p>
    </div>
  );
};

export default PostDisplay;
