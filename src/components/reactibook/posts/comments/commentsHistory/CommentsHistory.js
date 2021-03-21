import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Comment } from '../comment/comment';
import defaultProfilePhoto from '../../../../../assets/avatar.svg';
import { useSelector } from 'react-redux';

export const CommentsHistory = ({ post }) => {

    const { profilePhoto } = useSelector(state => state.auth);

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

    const [stateFormComment, setstateFormComment] = useState(initialState);
    const { content } = stateFormComment;

    const handleInputComment = ({ target }) => {
        setstateFormComment({
            ...stateFormComment,
            [target.name]: target.value
        });
    }

    const handleComment = ( event ) => {
        event.preventDefault();

        console.log( ...stateFormComment );

        setstateFormComment( initialState );
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
                onSubmit={ handleComment }>
                    <img src={ profilePhoto ? profilePhoto : defaultProfilePhoto } alt="Reactibook" height="30" className="d-inline-block align-middle mr-2" style={{ borderRadius: '50px' }}/>
                    <textarea
                        type="text"
                        placeholder="Write a comment..."
                        name="content"
                        value={ content }
                        onChange={ handleInputComment }
                        id="content"
                        className="w-100 form-control"
                        style={{ resize: 'none' }}
                    ></textarea>
                    <button
                        className="btn btn-light d-flex justify-content-center align-items-center rounded"
                        type="submit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{ marginLeft:'7px' }}
                    >
                        <i className="bi bi-chat-left-text-fill" style={{ fontSize: '18px' }}></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
