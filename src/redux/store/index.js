import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import registerReducer from "../reducers/registerReducer";
import loginReducer from "../reducers/loginReducer";
import postPostReducer from "../reducers/postPostReducer";
import postByIdReducer from "../reducers/postByIdReducer";
import getPostsReducer from "../reducers/getPostsReducer";
import commentReducer from "../reducers/commentReducer";
import getLikesReducer from "../reducers/getLikesReducer";
import getUsersReducer from "../reducers/usersReducer";
import likedReducer from "../reducers/likedReducer";
import getCommentsReducer from "../reducers/getCommentsReducer"
import followReducer from "../reducers/followReducer"
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  authorizedUser: {},
  registeredUser: {},
  loggedInUser: {},
  posts: {
    loading: false,
    posts: [],
    error: null,
  },
  postedPost: {
    loading: false,
    postedPost: {},
    error: null,
  },
  me: {
    loading: false,
    data: {},
    error: null,
  },
  liked: {
    loading: false,
    liked: {},
    error: null,
  },
  singlePost: {},
  comment: {},
  comments:{
    loading: false,
    comments: [],
    error: null,
  },
  getLikes: {
    loading: false,
    liked: {},
    error: null,
  },
  allUsers:{
    loading: false,
    users: [],
    error: null,
  },
  follow:{
    loading: false,
    follow: {},
    error: null,
}
};

const RootReducer = combineReducers({
    follow:followReducer,
    allUsers:getUsersReducer,
comments:getCommentsReducer,
  me: getUsersReducer,
  getLikes: getLikesReducer,
  liked: likedReducer,
  comment: commentReducer,
  singlePost: postByIdReducer,
  postedPost: postPostReducer,
  posts: getPostsReducer,
  registeredUser: registerReducer,
  loggedInUser: loginReducer,
});
export default function configureStore() {
  return createStore(
    RootReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
