import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultProfilePhoto from '../../../../../assets/avatar.svg';
import { startingDeleteComment } from '../../../../../redux/actions/comment';
import './comment.css';

export const Comment = ({ comment }) => {

    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth);

    const enableOptions = comment.user._id === uid ? 'dropdown' : ''

    const aligned = comment.user._id === uid ? 'justify-content-end' : 'justify-content-start'

    const handleEditComment = ( commentId ) => {
        
    }

    const handleDeleteComment = ( commentId ) => {
        dispatch( startingDeleteComment( commentId ) );
    }


    return (
        <div className={`dropleft mb-3 d-flex flex-row align-items-center ${ aligned }`} style={{ cursor: 'pointer' }}>
            <div className="d-flex flex-column justify-content-start align-items-end">
                <img src={ comment.user.profilePhoto ? comment.user.profilePhoto : defaultProfilePhoto } alt="Reactibook" height="30" className="d-inline-block align-middle mr-2" style={{ borderRadius: '50px' }}/>
                <div></div>
            </div>
                                                         
            <div className="shadow p-2  bg-white rounded" data-toggle={enableOptions}>
                <h6>{ comment.user.name }</h6>
                <p>{ comment.content }</p>
                <p className="text-right" style={{ fontSize: '10px' }}>{ comment.creationDate }</p>
            </div>
            <div className="dropdown-menu">
                <b onClick={ () => handleEditComment(comment._id) } className="dropdown-item"><i className="bi bi-pencil mr-1" style={{ color:'green' }}></i> Edit Comment</b>
                <b onClick={ () => handleDeleteComment(comment._id) }  className="dropdown-item"><i className="bi bi-trash mr-1" style={{ color:'red' }}></i> Delete Comment</b>
            </div>
        </div>
    )
}
