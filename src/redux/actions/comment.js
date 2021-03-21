import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../types/types";
import { toast } from 'react-toastify';
import { preparePosts } from '../../helpers/preparePosts';

export const startAddNewComment = ( comment, uid, pid ) => {
    return async( dispatch ) => {
        const response = await fetchWithToken('comments', {...comment, uid, pid}, 'POST');
        const { Data, Message, OK } = await response.json();

        if (!OK && Message.length > 0 && Message) {
            toast.warning( Message );
        } else {
            dispatch( addNewComment( Data ) );
            toast.success('Comment Added.');
        }
    }
}

export const startingDeleteComment = ( commentId, postId ) => {
    return async( dispatch ) => {
        const response = await fetchWithToken(`comments/${ commentId }`, {}, 'DELETE');
        const { Data, Message, OK } = await response.json();

        if (!OK && Message.length > 0 && Message) {
            toast.warning( Message );
        } else {
            dispatch( deleteComment( Data._id ) );

            toast.success('The comment has been removed.');
        }
    }
}

const addNewComment = ( post ) => ({
    type: types.postAddNewComment,
    payload: post
});

const deleteComment = ( commentId ) => ({
    type: types.postDeleteComment,
    payload: commentId
});