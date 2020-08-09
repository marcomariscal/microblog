import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTitles } from "./actions";
import TitleCard from "./TitleCard";
import Spinner from "./Spinner";
import "./TitleList.css";

const TitleList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTitles());
  }, [dispatch]);

  const titles = useSelector((s) => s.titles);
  const showSpinner = useSelector((s) => s.showSpinner);

  const sortedTitles = titles.sort((a, b) => b.votes - a.votes);

  const render = (
    <div className="TitleList">
      {sortedTitles.length > 0 ? (
        sortedTitles.map((titleData, idx) => (
          <TitleCard key={idx} cardData={titleData} />
        ))
      ) : (
        <p>No posts yet...</p>
      )}
    </div>
  );

  return showSpinner ? <Spinner /> : render;
};

export default TitleList;
