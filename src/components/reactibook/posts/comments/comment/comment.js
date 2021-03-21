import React from 'react';
import { useSelector } from 'react-redux';
import defaultProfilePhoto from '../../../../../assets/avatar.svg';
import './comment.css';

export const Comment = ({ comment }) => {

    const { uid } = useSelector(state => state.auth);

    const aligned = comment.user._id === uid ? 'justify-content-end' : 'justify-content-start'


    return (
        <div className={`mb-3 d-flex flex-row align-items-center ${ aligned }`} style={{ cursor: 'pointer' }}>
            <div className="d-flex flex-column justify-content-start align-items-end">
                <img src={ comment.user.profilePhoto ? comment.user.profilePhoto : defaultProfilePhoto } alt="Reactibook" height="30" className="d-inline-block align-middle mr-2" style={{ borderRadius: '50px' }}/>
                <div></div>
            </div>
                                                         
            <div className="shadow p-2  bg-white rounded">
                <h6>{ comment.user.name }</h6>
                <p>{ comment.content }</p>
                <p className="text-right">{ comment.creationDate }</p>
            </div>
        </div>
    )
}
