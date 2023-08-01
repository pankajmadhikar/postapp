// src/store/store.js
import { createStore, combineReducers } from "redux";
// import postReducer from "./reducers/postReducer";
import postReducer from "./reducers/reducer";

const rootReducer = combineReducers({
  posts: postReducer,
  // Add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
