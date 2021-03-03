import thunk from 'redux-thunk'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import registerReducer from "../reducers/registerReducer"
import loginReducer from "../reducers/loginReducer"
import PostsReducer from "../reducers/postsReducer"
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    registeredUser:{},
    loggedInUser:{},
    posts:{
    loading: false,
    posts: [],
    error: null
},
    
}

const RootReducer = combineReducers({posts:PostsReducer,registeredUser: registerReducer, loggedInUser:loginReducer})
export default function configureStore() {
    return createStore(RootReducer,initialState,composedEnhancer(applyMiddleware(thunk)))
}   