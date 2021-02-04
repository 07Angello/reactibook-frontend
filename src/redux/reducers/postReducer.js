import { types } from "../types/types";

const initialState = {
    postModalIsOpen: false
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.postOpenModal:
            return {
                ...state,
                postModalIsOpen: true
            }
            
        case types.postCloseModal:
            return {
                ...state,
                postModalIsOpen: false
            }
        default:
            return state;
    }
}
