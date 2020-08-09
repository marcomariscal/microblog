import React from "react";
import { NavLink } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Jumbotron>
        <h1>Microblog</h1>
        <p>Blog, blog, blog</p>
        <div>
          <NavLink to="/" className="mr-4">
            Blog
          </NavLink>
          <NavLink to="/new">Add a new post</NavLink>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Navigation;
