import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { loginModalReducer } from "./loginModalReducer";
import { postModalReducer } from "./postModalReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    loginModal: loginModalReducer,
    postModal: postModalReducer,
})