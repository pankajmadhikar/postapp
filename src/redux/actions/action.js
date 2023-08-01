// src/store/actions/postActions.js

import { ADD_POST, EDIT_POST } from "../constants";

export const addPost = (post) => {
  return { type: ADD_POST, payload: post };
};

export const editPost = (postId, newText) => {
  return { type: EDIT_POST, payload: { postId, newText } };
};
