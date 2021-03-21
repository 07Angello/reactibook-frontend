import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import './PostedContent.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import filterType from '../../../../helpers/filterTypes';
import { useDispatch, useSelector } from 'react-redux';
import { startGettingPostsFiltered } from '../../../../redux/actions/post';

export const PostedContent = () => {

    const dispatch = useDispatch();

    const { uid } = useSelector(state => state.auth);

    const [stateSelectedFilter, setStateSelectedFilter] = useState(filterType.ALL);

    useEffect(() => {

        dispatch( startGettingPostsFiltered( stateSelectedFilter, uid ) );

    }, [ dispatch, stateSelectedFilter, uid ]);

    const { posts } = useSelector(state => state.post);

    const handleFilter = ( filterType ) => {       
        dispatch( startGettingPostsFiltered( filterType, uid ) );
        setStateSelectedFilter( filterType );
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-body d-flex flex-row justify-content-between align-items-center">
                        <h5 className="card-title">Posts filter </h5>
                        <div className="btn-group ml-2" role="group" aria-label="Basic example">
                            <button type="button" 
                                className={
                                    stateSelectedFilter === filterType.ALL
                                        ? 'btn btn-outline-primary active'
                                        : 'btn btn-outline-primary'
                                }
                                onClick={() => handleFilter(filterType.ALL)}
                            >
                                All
                            </button>
                            <button type="button"
                                className={
                                    stateSelectedFilter === filterType.PUBLIC
                                        ? 'btn btn-outline-primary active'
                                        : 'btn btn-outline-primary'
                                }
                                onClick={() => handleFilter(filterType.PUBLIC)}
                            >
                                Public
                            </button>
                            <button type="button"
                                className={
                                    stateSelectedFilter === filterType.FRIENDS
                                        ? 'btn btn-outline-primary active'
                                        : 'btn btn-outline-primary'
                                }
                                onClick={() => handleFilter(filterType.FRIENDS)}
                            >
                                Friends
                            </button>
                            <button type="button"
                                className={
                                    stateSelectedFilter === filterType.ONLY_ME
                                        ? 'btn btn-outline-primary active'
                                        : 'btn btn-outline-primary'
                                }
                                onClick={() => handleFilter(filterType.ONLY_ME)}
                            >
                                Only Me
                            </button>
                        </div>
                    </div>
                </div>
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
                <br />
            </div>
        </div>
    )
}
