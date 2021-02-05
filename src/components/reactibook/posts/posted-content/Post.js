import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import defaultProfilePhoto from '../../../../assets/avatar.svg';
import './PostedContent.cs';

export const Post = ({ post }) => {

    const { name, profilePhoto, coverPhoto } = useSelector(state => state.auth);

    const [statePost, setStatePost] = useState({
        _id: post._id,
        content: '',
        filter:'public',
        isEdited: false,
    });

    const [isEditing, setIsEditing] = useState(false);

    const editPost = () => {
        setStatePost({
            ...statePost,
            content: post.content,
            filter: post.filter
        });

        setIsEditing(true);
        console.log(statePost);
    }

    const deletePost = () => {
        Swal.fire({
            title: 'Delete Post?',
            text: 'Are you sure you want to delete this post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                console.log('deleting post...')
            }
        });
    }

    const saveEditedPost = (e) => {
        e.preventDefault();

        if(statePost.content.length === 0 || statePost.content === '') {
            return;
        }

        // TODO: save post edited.
        setStatePost({
            ...statePost,
            content: post.content,
            filter: post.filter,
            isEdited: true
        });

        setIsEditing(false);
        console.log(statePost);
    }

    const cancelEditPost = () => {
        setIsEditing(false);
    }
    

    const handleInputChange = ({ target }) => {
        setStatePost({
            ...statePost,
            [target.name]: target.value,
            isEdited: true
        });
    }

    return (
        <div className="card mt-3">
            <div className="card-body">
                <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <img className="photo" alt="" 
                            src={ profilePhoto ? profilePhoto : defaultProfilePhoto } />
                    </div>
                    <div className="col-11 d-flex flex-column justify-content-center align-items-left">
                        <h6>{ name }</h6>
                        <p>{ post.createdAt }</p>
                    </div>
                    {
                        isEditing ? ( <> </> ) : (
                            <div className="btn-group dropleft register-form-x">
                                <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="bi bi-gear-fill"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a onClick={ editPost } className="dropdown-item"><i className="bi bi-pencil mr-1"></i> Edit Post</a>
                                    <a onClick={ deletePost } className="dropdown-item"><i className="bi bi-trash mr-1"></i> Delete Post</a>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                    {
                        isEditing ? (
                            <form
                                className="container"
                                onSubmit={ saveEditedPost }
                            >
                                <div className="form-group">
                                    <textarea
                                        name="content"
                                        rows="5"
                                        maxLength="1000"
                                        className="form-control"
                                        style={{ resize: 'none' }}
                                        value={ statePost.content }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                                <div className="w-100 d-flex flex-row justify-content-around align-items-center">
                                    <button onClick={ cancelEditPost } type="button" className="btn btn-light btn-sm mt-2 mb-1 pl-5 pr-5">
                                        <i className="bi bi-x mr-1"></i>
                                        Cancel
                                    </button>
                                    <button onClick={ saveEditedPost } type="submit" className="btn btn-primary btn-sm mt-2 mb-1 pl-5 pr-5">
                                        <i className="bi bi-check mr-1"></i>Save
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <p className="card-text">{ post.content }</p>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}
