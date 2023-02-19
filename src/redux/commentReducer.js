import { COMMENT_CREATE, COMMENT_EDIT, COMMENT_DELETE, COMMENTS_LOAD } from "./types";

const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_LOAD:
      const commentsNew = action.data.map((comment) => {
        return { id: comment.id, text: comment.name };
      });
      return { ...state, comments: commentsNew };
    case COMMENT_CREATE:
      return { ...state, comments: [...state.comments, action.data] };
    case COMMENT_EDIT:
      const commentId = state.comments.findIndex((comment) => comment.id === action.data.id);
      if (commentId === -1) return state;
      const updatedComments = [...state.comments.slice(0, commentId), action.data, ...state.comments.slice(commentId + 1)];
      return { ...state, comments: updatedComments };
    case COMMENT_DELETE:
      // use IIFE function, to isolate variables
      return (() => {
        const commentId = state.comments.findIndex((comment) => comment.id === action.data);
        if (commentId === -1) return state;
        const newComments = [...state.comments.slice(0, commentId), ...state.comments.slice(commentId + 1)];
        return { ...state, comments: newComments };
      })();
    default:
      return state;
  }
};
