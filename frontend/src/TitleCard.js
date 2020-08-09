import React from "react";
import { Link } from "react-router-dom";
import Votes from "./Votes";
import "./TitleCard.css";
import { useDispatch } from "react-redux";
import { vote } from "./actions";

const TitleCard = ({ cardData }) => {
  const { id, title, description, votes } = cardData;

  const dispatch = useDispatch();
  const handleVote = (direction) => {
    dispatch(vote(id, direction));
  };

  return (
    <div className="TitleCard card text-left my-3">
      <div className="card-body justify-content-start">
        <h5 className="card-title">
          <Link to={`/${id}`}>
            <h4>{title}</h4>
          </Link>
        </h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <Votes vote={handleVote} upVoteCount={votes} />
      </div>
    </div>
  );
};

export default TitleCard;
