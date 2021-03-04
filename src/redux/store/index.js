import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import registerReducer from "../reducers/registerReducer";
import loginReducer from "../reducers/loginReducer";
import postPostReducer from "../reducers/postPostReducer";
import postByIdReducer from "../reducers/postByIdReducer"
import getPostsReducer from "../reducers/getPostsReducer";
import commentReducer from "../reducers/commentReducer";
import getLikesReducer from "../reducers/getLikesReducer"
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
   authorizedUser:{},
  registeredUser: {},
  loggedInUser: {},
  posts: {
    loading: false,
    posts: [],
    error: null,
  },
  postedPost:{
    loading: false,
    postedPost:{},
    error: null,
  },
  liked:{},
  singlePost:{},
  comment:{},
  getLikes:[]
  
};

const RootReducer = combineReducers({
    getLikes:getLikesReducer,
    liked:postByIdReducer,
    comment:commentReducer,
    singlePost:postByIdReducer,
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
