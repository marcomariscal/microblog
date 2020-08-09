import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POST,
  GET_TITLES,
  SHOW_ERROR,
  SHOW_SPINNER,
  END_SHOW_SPINNER,
  VOTE,
} from "./actionTypes";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";

export function addPost(data) {
  return async function (dispatch) {
    try {
      const res = await axios.post(`${BASE_URL}/posts/`, data);
      dispatch(addedPost(res.data));
    } catch (e) {
      dispatch(showError(e.response.data));
    }
  };
}

export function addedPost(post) {
  return { type: ADD_POST, post };
}

export function deletePost(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
      dispatch(deletedPost(id));
    } catch (e) {
      dispatch(showError(e.response.data));
    }
  };
}

export function deletedPost(id) {
  return { type: DELETE_POST, id };
}

export function editPost(id, data) {
  return async function (dispatch) {
    try {
      const res = await axios.put(`${BASE_URL}/posts/${id}`, data);
      dispatch(editedPost(id, res.data));
    } catch (e) {
      dispatch(showError(e.response.data));
    }
  };
}

export function editedPost(id, post) {
  return { type: EDIT_POST, id, post };
}

export function addComment(id, data) {
  return async function (dispatch) {
    try {
      const { data: comment } = await axios.post(
        `${BASE_URL}/posts/${id}/comments/`,
        data
      );
      dispatch(addedComment(id, comment));
    } catch (e) {
      dispatch(showError(e.response.data));
    }
  };
}

export function addedComment(id, comment) {
  return { type: ADD_COMMENT, id, comment };
}

export function deleteComment(postId, commentId) {
  return async function (dispatch) {
    try {
      const res = await axios.delete(
        `${BASE_URL}/posts/${postId}/comments/${commentId}`
      );
      dispatch(deletedComment(postId, commentId));
    } catch (e) {
      dispatch(showError(e.response.data));
    }
  };
}

export function deletedComment(postId, commentId) {
  return { type: DELETE_COMMENT, postId, commentId };
}

export function getPost(id) {
  return async function (dispatch) {
    dispatch(startLoad());
    try {
      const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
      dispatch(gotPost(data));
      dispatch(endLoad());
    } catch (e) {
      dispatch(showError(e.response.data));
      dispatch(endLoad());
    }
  };
}

export function vote(id, direction) {
  return async function (dispatch) {
    try {
      const {
        data: { votes },
      } = await axios.post(`${BASE_URL}/posts/${id}/vote/${direction}`);
      dispatch(voted(id, votes));
    } catch (e) {
      dispatch(showError(e.response.data));
    }
  };
}

export function voted(id, votes) {
  return { type: VOTE, id, votes };
}

export function gotPost(data) {
  return { type: GET_POST, data };
}

export function getTitles() {
  return async function (dispatch) {
    dispatch(startLoad());

    try {
      const { data } = await axios.get(`${BASE_URL}/posts/`);
      dispatch(gotTitles(data));
      dispatch(endLoad());
    } catch (e) {
      dispatch(showError(e.response.data));
      dispatch(endLoad());
    }
  };
}

export function gotTitles(titles) {
  return { type: GET_TITLES, titles };
}

export function showError(msg) {
  return { type: SHOW_ERROR, msg };
}

export function startLoad() {
  return { type: SHOW_SPINNER };
}

export function endLoad() {
  return { type: END_SHOW_SPINNER };
}
