import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultProfilePhoto from '../../../../../assets/avatar.svg';
import { startEditingComment, startingDeleteComment } from '../../../../../redux/actions/comment';
import './comment.css';

export const Comment = ({ comment }) => {

    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth);
    const isOwner = comment.user._id === uid;

    const [isEditing, setIsEditing] = useState(false);
    const [stateComment, setStateComment] = useState({
        _id: comment._id,
        content: '',
        uid:uid,
        pid:comment.post,
        isEdited: true,
    });

    const enableOptions = isOwner ? 'dropdown' : ''

    const aligned = isOwner ? 'justify-content-end' : 'justify-content-start'

    const handleEditComment = ( commentId ) => {
        setStateComment({
            ...stateComment,
            content: comment.content
        });

        setIsEditing(true);
    }

    const handleDeleteComment = ( commentId ) => {
        dispatch( startingDeleteComment( commentId ) );
    }

    const handleInputChange = ({ target }) => {
        setStateComment({
            ...stateComment,
            [target.name]: target.value,
            isEdited: true
        });
    }

    const handleSaveEditComment = ( event ) => {
        event.preventDefault();

        if(stateComment.content.length === 0 || stateComment.content === '') {
            return;
        }

        dispatch( startEditingComment(stateComment) );

        setIsEditing(false);
    }

    const handleCancelEditComment = () => {
        setIsEditing( false );
    }

    return (
        <div className={`dropleft mb-3 d-flex flex-row align-items-center ${ aligned }`} style={{ cursor: 'pointer' }}>
            <div className="d-flex flex-column justify-content-start align-items-end">
                <img src={ comment.user.profilePhoto ? comment.user.profilePhoto : defaultProfilePhoto } alt="Reactibook" height="30" className="d-inline-block align-middle mr-2" style={{ borderRadius: '50px' }}/>
                <div></div>
            </div>

            {
                isEditing ? (
                    <div className="shadow p-2  bg-white rounded" style={{ width: '75%' }}>
                        <form
                            onSubmit={ handleSaveEditComment }
                        >
                            <h6>{ comment.user.name }</h6>
                            <textarea
                                value={ stateComment.content }
                                name="content"
                                onChange={ handleInputChange }
                                maxLength="1000"
                                className="form-control"
                            />
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <button type="submit" className="btn btn-outline-success btn-sm m-1">
                                        <i className="bi bi-check2-circle"></i>
                                    </button>
                                    <button onClick={ handleCancelEditComment } type="button" className="btn btn-outline-danger btn-sm m-1">
                                        <i className="bi bi-x"></i>
                                    </button>
                                </div>
                                <p className="text-right" style={{ fontSize: '15px' }}>Editing...</p>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <div className="shadow p-2  bg-white rounded" data-toggle={enableOptions}>
                            <h6>{ comment.user.name }</h6>
                            <p>{ comment.content }</p>
                            <p className="text-right" style={{ fontSize: '10px' }}>{ comment.creationDate }</p>
                            {
                                isOwner ? (<p className="optionBtn"><i className="bi bi-three-dots"></i></p>) : (<></>)
                            }
                            
                        </div>
                        <div className="dropdown-menu">
                            <b onClick={ () => handleEditComment(comment._id) } className="dropdown-item"><i className="bi bi-pencil mr-1" style={{ color:'green' }}></i> Edit Comment</b>
                            <b onClick={ () => handleDeleteComment(comment._id) }  className="dropdown-item"><i className="bi bi-trash mr-1" style={{ color:'red' }}></i> Delete Comment</b>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
