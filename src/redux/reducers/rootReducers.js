import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { loginModalReducer } from "./loginModalReducer";
import { postModalReducer } from "./postModalReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    loginModal: loginModalReducer,
    postModal: postModalReducer,
})