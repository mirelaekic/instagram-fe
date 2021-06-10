import { combineReducers} from "redux";
import commentReducer from "./commentReducer";
import followReducer from "./followReducer";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

const RootReducer = combineReducers({
    user: usersReducer,
    comment:commentReducer,
    follow: followReducer,
    post: postReducer
})

export default RootReducer