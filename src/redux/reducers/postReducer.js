import { types } from "../types/types";

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.postAddNew:
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }

        case types.postGottenFiltered:
            return {
                ...state,
                posts: [ 
                    ...action.payload
                ]
            }

        case types.postDelete:
            return {
                ...state,
                posts: state.posts.filter(
                    post => ( post._id !== action.payload )
                ),
            }

        case types.postUpdate:
            return {
                ...state,
                posts: state.posts.map(
                    post => ( post._id === action.payload._id ) ? action.payload : post
                )
            }

        case types.postsLogout:
            return {
                ...initialState
            }
    
        default:
            return state;
    }
}
