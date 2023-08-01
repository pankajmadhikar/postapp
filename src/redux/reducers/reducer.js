// src/store/reducers/postReducer.js

import { ADD_POST, EDIT_POST } from "../constants";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, text: action.payload.newText }
            : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
