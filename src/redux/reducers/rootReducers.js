import { combineReducers } from "redux";
import { loginModalReducer } from "./loginModalReducer";
import { postModalReducer } from "./postModalReducer";

export const rootReducer = combineReducers({
    loginModal: loginModalReducer,
    postModal: postModalReducer,
    // TODO: Wall Reducers
})