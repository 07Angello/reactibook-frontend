import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Comment } from '../comment/comment';
import defaultProfilePhoto from '../../../../../assets/avatar.svg';
import { useDispatch, useSelector } from 'react-redux';
import './CommentHistory.css';
import { startAddNewComment } from '../../../../../redux/actions/comment';

export const CommentsHistory = ({ post }) => {

    const dispatch = useDispatch();

    var currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
    const initialState= {
        content: '',
        creationDate: currentDate.toLocaleDateString('en-us', options)
    }

    const { profilePhoto, uid } = useSelector(state => state.auth);

    const [commentFormValue, setCommentFormValue] = useState(initialState);
    const { content } = commentFormValue;

    const handleInputChange = ({ target }) => {
        setCommentFormValue({
            ...commentFormValue,
            [target.name]: target.value
        });
    }

    const handleSaveComment = ( event ) => {
        event.preventDefault();

        dispatch( startAddNewComment( commentFormValue, uid, post._id ) );

        setCommentFormValue( initialState );
    }

    return (
        <div>
            <hr />
            {
                post.comments.length > 0 ? ( 
                    <div>
                        <TransitionGroup>
                            {
                                post.comments.map((comment) => (
                                    <CSSTransition key={ comment._id } timeout={ 300 } classNames="post">
                                        <Comment comment={ comment } ></Comment>
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                    </div>
                ) : (<p className=" text-center">No comments</p>)
            }
            <br />
            <div className="w-100 d-flex justify-content-end align-items-center">
                <form className=" d-flex flex-row justify-content-center align-items-center w-100"
                    onSubmit={ handleSaveComment }>
                    <img src={ profilePhoto ? profilePhoto : defaultProfilePhoto } alt="profile" height="30" className="mr-2 mb-3" style={{ borderRadius: '50px' }}/>
                    <div className="form-group w-100">
                        <input
                            type="text"
                            className="w-100 form-control"
                            placeholder="Write a comment..."
                            name="content"
                            value={ content }
                            onChange={ handleInputChange }
                            id="content"
                            style={{ resize: 'none' }}
                        ></input>
                    </div>
                    
                    <button
                        className="btn btn-light d-flex justify-content-center align-items-center rounded mb-3"
                        type="submit" style={{ marginLeft:'7px' }}
                    >
                        <i className="bi bi-chat-left-text-fill" style={{ fontSize: '18px' }}></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
