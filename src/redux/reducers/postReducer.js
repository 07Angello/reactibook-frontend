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
                    if (post._id === action.payload.post) {
                        return post.comments.push({...action.payload});
                    }

                    return post.comments;
                })
            });

        case types.postEditComment:
            return produce(state, (draft) => {
                draft.posts.map((post) => {
                    if (post._id === action.payload.post) {
                        for( let i = 0; i < post.comments.length; i++) { 
                            if ( post.comments[i]._id === action.payload._id) { 
                                post.comments[i] = action.payload;
                            }
                        }
                    }

                    return post.comments;
                })
            });

        case types.postDeleteComment:
            return produce(state, (draft) => {
                draft.posts.map((post) => {
                    if (post._id === action.payload.post) {
                        for( let i = 0; i < post.comments.length; i++) { 
                            if ( post.comments[i]._id === action.payload._id) { 
                                return post.comments.splice(i, 1); 
                            }
                        }
                    }

                    return post.comments;
                })
            });

    
        default:
            return state;
    }
}
