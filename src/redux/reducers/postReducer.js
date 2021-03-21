import { types } from "../types/types";
import produce from 'immer';

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
        
        case types.postAllWall:
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

        case types.postAddNewComment:
            return produce(state, (draft) => {
                draft.posts.map((post) => {
                    post.comments.push({...action.payload});
                })
            });

        case types.postEditComment:
            return {
                ...state,
                posts: state.posts.comments.map(
                    comment => ( comment._id === action.payload._id ) ? action.payload : comment
                )
            }

        case types.postDeleteComment:
            return produce(state, (draft) => {
                draft.posts.map((post) => {
                    post.comments.map((comment) => {
                        if (comment._id === action.payload) {
                            console.log(comment.content)
                        }
                        
                    }) 
                })
            });

    
        default:
            return state;
    }
}
