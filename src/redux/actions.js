import axios from "axios";
import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_EDIT,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

export const incrementLikes = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementLikes = () => {
  return {
    type: DECREMENT,
  };
};

export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    data: text,
  };
};

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
};

export const commentEdit = (text, id) => {
  return {
    type: COMMENT_EDIT,
    data: { text, id },
  };
};

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    data: id,
  };
};

export const commentsLoad = () => {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=10");
      dispatch({ type: COMMENTS_LOAD, data: response.data });
    } catch (err) {
      dispatch({ type: ERROR_DISPLAY_ON, data: err.message });
    } finally {
      dispatch(loaderOff());
    }
  };
};

export const loaderOn = () => {
  return {
    type: LOADER_DISPLAY_ON,
  };
};

export const loaderOff = () => {
  return {
    type: LOADER_DISPLAY_OFF,
  };
};

export const errorOn = (text) => {
  return {
    type: ERROR_DISPLAY_ON,
    data: text,
  };
};

export const errorOff = () => {
  return {
    type: ERROR_DISPLAY_OFF,
  };
};
