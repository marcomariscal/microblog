import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post";

const Routes = () => {
  const postRender = (props) => {
    const { id } = props.match.params;
    return <Post id={id} />;
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/:id" render={postRender} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
