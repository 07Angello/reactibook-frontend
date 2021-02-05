import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { postCloseModal } from '../../../../redux/actions/postModal';
import defaultProfilePhoto from '../../../../assets/avatar.svg'

import './NewPost.css';
const customStyles = {
    content: {
        top : '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform : 'translate(-50%, -50%)'
    }
}

export const NewPostModal = () => {

    const initialState= {
        postContent: '',
        filter: 'public'
    }

    const { name, profilePhoto, coverPhoto } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [postFormValue, setPostFormValue] = useState(initialState)
    const { postContent } = postFormValue;

    const { postModalIsOpen, filter } = useSelector(state => state.postModal);


    const closeNewPostModal = () => {
        dispatch( postCloseModal() );
    }

    const handleInputChange = ({ target }) => {
        setPostFormValue({
            ...postFormValue,
            [target.name]: target.value
        })
    }

    const savePostForm = ( event ) => {
        event.preventDefault();
        
        console.log(postFormValue);
    }

    return (
        <div>
             <Modal
                isOpen={ postModalIsOpen }
                onRequestClose={ closeNewPostModal }
                style={ customStyles }
                closeTimeoutMS={ 100 }
                className="modal"
                overlayClassName="modal-background"
            >
                <div className="pl-3 pr-3">
                    <h2>Create Post</h2>
                    <i onClick={ closeNewPostModal } className="bi bi-x register-form-x"></i>
                </div>
                
                <hr/>

                <form
                    className="container"
                    onSubmit={ savePostForm }
                >
                    <div className="col-12 d-flex flex-row justify-content-center align-items-center mb-3">
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <img className="photo" alt="" src={ profilePhoto ? profilePhoto : defaultProfilePhoto } />
                        </div>
                        <div className="col-11 d-flex flex-column justify-content-center align-items-left">
                            <h6>{ name }</h6>
                            <select name="filter"
                                value={ filter }
                                className="form-control col-4"
                                name="filter"
                                onChange={ handleInputChange }
                            >
                                <option value="public">Public</option>
                                <option value="friends">Friends</option>
                                <option value="onlyMe">Only Me</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className={`form-control`}
                            placeholder="What's on your mind?"
                            name="postContent"
                            value={ postContent }
                            onChange={ handleInputChange }
                            id="postContent"
                            style={{ height: '225px', resize: 'none' }}
                        ></textarea>
                    </div>

                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <button onClick={ savePostForm } type="submit" className="btn btn-primary btn-sm mt-2 mb-1 pl-5 pr-5 btn-block">Post</button>
                    </div>

                </form>
                
            </Modal>
        </div>
    )
}
