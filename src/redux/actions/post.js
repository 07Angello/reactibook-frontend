import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../types/types";
import { toast } from 'react-toastify';
import { preparePosts } from '../../helpers/preparePosts';

export const startAddNewPost = ( post, uid ) => {
    return async( dispatch ) => {
        const response = await fetchWithToken('posts', {...post, uid}, 'POST');
        const { Data, Message, OK } = await response.json();

        if (!OK && Message.length > 0 && Message) {
            toast.warning( Message );
        } else {
            dispatch( postAddNew( Data ) );
            toast.success('Post created.');
        }
    }
}

export const startGettingPostsFiltered = ( filterType, uid ) => {
    return async( dispatch ) => {

        try {
            const response = await fetchWithToken(`posts/${ filterType }/${ uid }`);
            const { Data, Message, OK } = await response.json();

            console.log(Data);

            if (!OK && Message.length > 0 && Message) {
                toast.warning( Message );
            } else {
                const posts = preparePosts( Data );
                dispatch( postsFiltered( posts ) );
            }
        } catch (error) {
            console.log(error);
            toast.error('An error has ocurred while the events were LOADING!');
        }

    }
}

export const startGettingWallPosts = () => {
    return async( dispatch ) => {

        try {
            const response = await fetchWithToken(`posts/all/wall/ups`);
            const { Data, Message, OK } = await response.json();

            if (!OK && Message.length > 0 && Message) {
                toast.warning( Message );
            } else {
                const posts = preparePosts( Data );
                dispatch( postsWall( posts ) );
            }
        } catch (error) {
            console.log(error);
            toast.error('An error has ocurred while the events were LOADING!');
        }

    }
}

export const startingDeletePost = ( postId ) => {
    return async( dispatch ) => {
        const response = await fetchWithToken(`posts/${ postId }`, {}, 'DELETE');
        const { Data, Message, OK } = await response.json();

        if (!OK && Message.length > 0 && Message) {
            toast.warning( Message );
        } else {
            dispatch( deletePost( Data._id ) );

            toast.success('The post has been removed.');
        }
    }
}

export const startEditingPost = ( post ) => {
    return async( dispatch ) => {
        const response = await fetchWithToken(`posts/${ post._id }`, { ...post }, 'PUT');
        const { Data, Message, OK } = await response.json();

        if ( !OK && Message.length > 0 && Message ) {
            toast.warning( Message );
        } else {
            dispatch( postUpdate( Data ) );

            toast.success( 'Post updated.' );
        }
    }
}

export const postsLogout = () => ({
    type: types.postsLogout
})

const deletePost = ( postId ) => ({
    type: types.postDelete,
    payload: postId
});


const postAddNew = ( post ) => ({
    type: types.postAddNew,
    payload: post
});

const postsFiltered = ( posts ) => ({
    type: types.postGottenFiltered,
    payload: posts
});

const postsWall = ( posts ) => ({
    type: types.postAllWall,
    payload: posts
});

const postUpdate = ( post ) => ({
    type: types.postUpdate,
    payload: post
});
