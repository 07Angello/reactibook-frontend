import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Comment } from '../comment/comment';
import defaultProfilePhoto from '../../../../../assets/avatar.svg';
import { useSelector } from 'react-redux';
import './CommentsHistory.css';

export const CommentsHistory = ({ post }) => {

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

    const { profilePhoto } = useSelector(state => state.auth);

    const [commentFormValue, setCommentFormValue] = useState(initialState);
    const { content } = commentFormValue;

    const handleInputChange = ({ target }) => {
        setCommentFormValue({
            ...commentFormValue,
            [target.name]: target.value
        });
    }

    const handlePostComment = ( event ) => {
        event.preventDefault();

        console.log( commentFormValue );

        setCommentFormValue( initialState );
    }

    return (
        <div>
            <hr />
            {
                post.numComments > 0 ? ( 
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
                    onSubmit={ handlePostComment }>
                    <img src={ profilePhoto ? profilePhoto : defaultProfilePhoto } height="30" className="d-inline-block align-middle mr-2" style={{ borderRadius: '50px' }}/>
                    <div className="form-group w-100">
                        <textarea
                            type="text"
                            className="w-100 form-control"
                            placeholder="Write a comment..."
                            name="content"
                            value={ content }
                            onChange={ handleInputChange }
                            id="content"
                            style={{ resize: 'none' }}
                        ></textarea>
                    </div>
                    
                    <button
                        className="btn btn-light d-flex justify-content-center align-items-center rounded"
                        type="submit" style={{ marginLeft:'7px' }}
                    >
                        <i className="bi bi-chat-left-text-fill" style={{ fontSize: '18px' }}></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
