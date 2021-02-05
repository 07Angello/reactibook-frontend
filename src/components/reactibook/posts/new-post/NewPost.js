import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NewPost.css';
import { NewPostModal } from './NewPostModal';
import { postOpenModal } from '../../../../redux/actions/postModal'
import defaultProfilePhoto from '../../../../assets/avatar.svg'

export const NewPost = () => {

    const dispatch = useDispatch();

    const { profilePhoto } = useSelector(state => state.auth);

    const openNewPostModal = () => {
        dispatch( postOpenModal() );
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                            <div className="col-1 d-flex justify-content-center align-items-center">
                                <img className="photo" alt="" src={ profilePhoto ? profilePhoto : defaultProfilePhoto } />
                            </div>
                           <div className="col-11 d-flex justify-content-center align-items-center">
                                <button onClick={ openNewPostModal } type="button" className="btn btn-light btn-lg btn-block text-left rounded">
                                    What's on your mind?
                                </button>
                           </div>
                        </div>

                        <hr className="separator"></hr>

                        <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                            <div className="col-4 d-flex flex-row justify-content-center align-items-center">
                                <p className="woym">
                                    <i className="bi bi-camera-video-fill mr-1 woym-icons" style={{ color: '#FA383E' }}></i> 
                                    Live video
                                </p>
                            </div>
                            <div className="col-4 d-flex flex-row justify-content-center align-items-center">
                                <p className="woym">
                                    <i className="bi bi-file-earmark-image mr-1 woym-icons" style={{ color: '#00A400' }}></i> 
                                    Photo/Video
                                </p>
                            </div>
                            <div className="col-4 d-flex flex-row justify-content-center align-items-center">
                                <p className="woym">
                                    <i className="bi bi-flag-fill mr-1 woym-icons" style={{ color: '#3578E5' }}></i> 
                                    Life Event
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewPostModal />
        </div>
    )
}
