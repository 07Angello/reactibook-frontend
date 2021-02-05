import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { postCloseModal } from '../../../../redux/actions/postModal';
import defaultProfilePhoto from '../../../../assets/avatar.svg'

import './NewPost.css';
import { startAddNewPost } from '../../../../redux/actions/post';

import filterType from '../../../../helpers/filterTypes';

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
        content: '',
        filter: filterType.PUBLIC
    }

    const { uid, name, profilePhoto } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [postFormValue, setPostFormValue] = useState(initialState)
    const { content } = postFormValue;

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

    const handleSavPostForm = ( event ) => {
        event.preventDefault();

        dispatch( startAddNewPost( postFormValue, uid ) );
        closeNewPostModal();
        setPostFormValue( initialState );
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
                    onSubmit={ handleSavPostForm }
                >
                    <div className="col-12 d-flex flex-row justify-content-center align-items-center mb-3">
                        <div className="col-1 d-flex justify-content-center align-items-center">
                            <img className="photo" alt="" src={ profilePhoto ? profilePhoto : defaultProfilePhoto } />
                        </div>
                        <div className="col-11 d-flex flex-column justify-content-center align-items-left">
                            <h6>{ name }</h6>
                            <select
                                value={ filter }
                                className="form-control col-4"
                                name="filter"
                                onChange={ handleInputChange }
                            >
                                <option value={ filterType.PUBLIC }>Public</option>
                                <option value={ filterType.FRIENDS }>Friends</option>
                                <option value={ filterType.ONLY_ME }>Only Me</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className={`form-control`}
                            placeholder="What's on your mind?"
                            name="content"
                            value={ content }
                            onChange={ handleInputChange }
                            id="content"
                            style={{ height: '225px', resize: 'none' }}
                        ></textarea>
                    </div>

                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary btn-sm mt-2 mb-1 pl-5 pr-5 btn-block">Post</button>
                    </div>

                </form>
                
            </Modal>
        </div>
    )
}
