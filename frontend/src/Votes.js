import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Votes.css";

const Votes = ({ vote, upVoteCount }) => {
  return (
    <div className="Votes">
      <p className="d-inline mr-3">
        <i>{upVoteCount} Votes:</i>
      </p>
      <button onClick={() => vote("up")} className="mr-2">
        <FontAwesomeIcon icon={faThumbsUp} size="lg" color="green" />
      </button>
      <button onClick={() => vote("down")}>
        <FontAwesomeIcon icon={faThumbsDown} size="lg" color="red" />
      </button>
    </div>
  );
};

export default Votes;
