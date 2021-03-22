import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { startGettingWallPosts } from '../../../redux/actions/post';
import { Post } from '../posts/posted-content/Post';

export const Wall = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startGettingWallPosts() );
    }, [ dispatch ]);


    const { posts } = useSelector(state => state.post);

    return (
        <div className="posts-container mb-3">
            <div className="container">
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col-md-7">
                        {
                            posts.length === 0 ? (<h5 className="text-center mt-5">No posts YET...</h5>) : (
                                <div>
                                    <TransitionGroup>
                                    {
                                        posts.map((post) => (
                                            <CSSTransition key={ post._id } timeout={ 300 } classNames="post">
                                                <Post post={ post } />
                                            </CSSTransition>
                                        ))
                                    }
                                    </TransitionGroup>
                                </div>
                            )
                        }
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}
