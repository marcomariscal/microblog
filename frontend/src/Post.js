import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostDisplay from "./PostDisplay";
import { useSelector, useDispatch } from "react-redux";
import {
  editPost,
  deletePost,
  addComment,
  deleteComment,
  getPost,
  vote,
} from "./actions";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const Post = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const dispatch = useDispatch();
  const post = useSelector((s) => s.posts[id]);
  const showSpinner = useSelector((s) => s.showSpinner);

  useEffect(() => {
    if (!post) {
      dispatch(getPost(id));
    }
    setIsLoading(false);
  }, [dispatch, id]);

  const [isEditingPost, setIsEditingPost] = useState(false);
  const toggleEditPost = () => {
    setIsEditingPost(true);
  };

  const handlePostEdit = (id, post) => {
    dispatch(editPost(id, post));
  };

  const handlePostDelete = (e) => {
    dispatch(deletePost(id));
    history.push("/");
  };

  // comment is an object with postId and text
  const handleCommentAdd = (commentText) => {
    dispatch(addComment(id, commentText));
  };

  const handleCommentDelete = (commentId) => {
    dispatch(deleteComment(id, commentId));
  };

  const handleVote = (direction) => {
    dispatch(vote(id, direction));
  };

  const postRender = isEditingPost ? (
    <PostForm post={post} editPost={handlePostEdit} />
  ) : (
    <PostDisplay
      post={post}
      toggleEditPost={toggleEditPost}
      deletePost={handlePostDelete}
      vote={handleVote}
    />
  );

  return (
    <div className="Post">
      {showSpinner || isLoading ? (
        <Spinner />
      ) : (
        <>
          {postRender}
          <br />
          {!isEditingPost && (
            <CommentList
              comments={post.comments || []}
              deleteComment={handleCommentDelete}
            />
          )}
          {!isEditingPost && <CommentForm addComment={handleCommentAdd} />}
        </>
      )}
    </div>
  );
};

export default Post;
