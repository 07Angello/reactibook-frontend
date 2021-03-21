import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import defaultProfilePhoto from '../../../../assets/avatar.svg';
import { startEditingPost, startingDeletePost } from '../../../../redux/actions/post';
import { PostTypeIcon } from '../../../ui/PostTypeIcon';
import './PostedContent.css';
import filterType from '../../../../helpers/filterTypes';
import { Comments } from '../comments/Comments';

export const Post = ({ post }) => {
    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth);

    const [statePost, setStatePost] = useState({
        _id: post._id,
        content: '',
        filter:'public',
        isEdited: false,
    });


    const [isEditing, setIsEditing] = useState(false);

    const handleEditPost = ( postId ) => {
        setStatePost({
            ...statePost,
            content: post.content,
            filter: post.filter,
            user: post.user
        });

        setIsEditing(true);
    }

    const handleDeletePost = ( postId ) => {
        Swal.fire({
            title: 'Delete Post?',
            text: 'Are you sure you want to delete this post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                dispatch( startingDeletePost( postId ) );
            }
        });
    }

    const handleSaveEditedPost = (e) => {
        e.preventDefault();

        if(statePost.content.length === 0 || statePost.content === '') {
            return;
        }

        setStatePost({
            ...statePost,
            content: post.content,
            filter: post.filter,
            isEdited: true,
            user: post.user,
            comments: post.comments
        });

        setIsEditing(false);
        dispatch( startEditingPost( statePost ) );
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
                            src={ post.user.profilePhoto ? post.user.profilePhoto : defaultProfilePhoto } />
                    </div>
                    <div className="col-11 d-flex flex-column justify-content-center align-items-left">
                        <h6>{ post.user.name }</h6>
                        <div className="d-flex flex-row justify-content-left align-items-center">
                            <p className="creation-section mr-3 creation-size">{ post.creationDate }</p>
                            <PostTypeIcon postType={ post.filter } />
                        </div>
                    </div>
                    {
                        isEditing ? ( <> </> ) : (

                            <div className="btn-group dropleft register-form-x">
                            {
                                uid !== post.user._id  ? ( <> </> ) : (

                                    <div>
                                        <button className="btn btn-light btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bi bi-gear-fill"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <b onClick={ () => handleEditPost(post._id) } className="dropdown-item"><i className="bi bi-pencil mr-1"></i> Edit Post</b>
                                            <b onClick={ () => handleDeletePost(post._id) }  className="dropdown-item"><i className="bi bi-trash mr-1"></i> Delete Post</b>
                                        </div>
                                    </div>

                                )
                            }
                            </div>
                        )
                    }
                </div>
                <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                    {
                        isEditing ? (
                            <form
                                className="container"
                                onSubmit={ handleSaveEditedPost }
                            >
                                <div className="col-12 d-flex flex-row justify-right-center align-items-left mb-1">
                                    <i className="bi bi-shield-lock-fill mr-3" style={{ fontSize:'20px' }}> Privacy: </i>
                                    <select
                                        value={ statePost.filter }
                                        className="form-control col-4"
                                        name="filter"
                                        onChange={ handleInputChange }
                                    >
                                        <option value={ filterType.PUBLIC }>Public</option>
                                        <option value={ filterType.FRIENDS }>Friends</option>
                                        <option value={ filterType.ONLY_ME }>Only Me</option>
                                    </select>
                                </div>
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
                                    <button type="submit" className="btn btn-primary btn-sm mt-2 mb-1 pl-5 pr-5">
                                        <i className="bi bi-check mr-1"></i>Save
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="col-12">
                                <p className="text-left">{ post.content }</p>
                            </div>
                        )
                    }
                    
                </div>
                <hr />
                <div className="d-flex flex-column justify-content-end align-items-center">
                    <div className="w-100 text-right">
                        {
                            post.comments.length > 0 ? (
                                <h6 className="commentsNumber"
                                    data-toggle="collapse" data-target={`#comment-${post._id}`} aria-expanded="false" aria-controls={`#comment-${post._id}`}
                                >
                                    { post.comments.length } Comments
                                    </h6>
                            ) : (
                                <h6 className="commentsNumber"
                                    data-toggle="collapse" data-target={`#comment-${post._id}`} aria-expanded="false" aria-controls={`#comment-${post._id}`}
                                >
                                    { post.numComments } Comments
                                </h6>
                            )
                        }
                    </div>

                    <div className="collapse w-100" id={`comment-${post._id}`}>
                        <Comments post={ post }></Comments>
                    </div>

                </div>
            </div>
        </div>
    )
}
