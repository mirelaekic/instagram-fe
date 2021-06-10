import {createStore, applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import RootReducer from "../reducers/rootReducer";

const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;