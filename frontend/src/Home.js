import React from "react";
import TitleList from "./TitleList";
import { useSelector } from "react-redux";
import Alert from "./Alert";

const Home = () => {
  const msgs = useSelector((s) => s.showError);
  return (
    <>
      {msgs && <Alert msgs={msgs} />}
      <h5>Welcome to Microblog</h5>
      <TitleList />
    </>
  );
};

export default Home;
