/**
 * store will hold posts which have title, description, and associated comments array
 */
import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_TITLES,
  SHOW_ERROR,
  GET_POST,
  SHOW_SPINNER,
  END_SHOW_SPINNER,
  VOTE,
} from "../actionTypes";

const DEFAULT_STATE = { posts: {}, titles: [], error: [], showSpinner: false };

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      const { id, title, description } = action.post;

      // add the newly created post to posts
      const postsCopy = { ...state.posts };
      postsCopy[action.post.id] = { ...action.post, comments: [], votes: 0 };

      // add the newly created post's title attributes to the titles state
      const titlesCopy = [...state.titles, { id, title, description }];
      return { ...state, posts: postsCopy, titles: titlesCopy };
    }
    case DELETE_POST: {
      const postsCopy = { ...state.posts };
      delete postsCopy[action.id];
      return { ...state, posts: postsCopy };
    }
    case EDIT_POST: {
      const postsCopy = { ...state.posts };

      // make a copy of the specific post that is to be updated by id
      const postCopy = postsCopy[action.id];
      postsCopy[action.id] = { ...postCopy, ...action.post };
      return { ...state, posts: postsCopy };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            comments: [...state.posts[action.id].comments, action.comment],
          },
        },
      };
    }
    case DELETE_COMMENT: {
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: state.posts[action.postId].comments.filter(
              (c) => c.id !== action.commentId
            ),
          },
        },
      };
    }

    case VOTE: {
      const title = state.titles.filter((title) => title.id === action.id)[0];

      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            votes: action.votes,
          },
        },
        titles: [
          ...state.titles.filter((title) => title.id !== action.id),
          { ...title, votes: action.votes },
        ],
      };
    }

    case GET_TITLES:
      return { ...state, titles: action.titles };

    case SHOW_ERROR:
      return { ...state, error: action.msg };

    case SHOW_SPINNER:
      return { ...state, showSpinner: true };

    case END_SHOW_SPINNER:
      return { ...state, showSpinner: false };

    case GET_POST:
      return {
        ...state,
        posts: {
          ...state.posts[action.data.id],
          [action.data.id]: action.data,
        },
      };

    default:
      return state;
  }
}

export default rootReducer;
