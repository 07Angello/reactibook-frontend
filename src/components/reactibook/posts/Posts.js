import React from 'react';
import { NewPost } from './new-post/NewPost';
import { PersonalContent } from './personal-content/PersonalContent';
import { PostedContent } from './posted-content/PostedContent';
import './Posts.css';

export const Posts = () => {
    return (
        <div className="posts-container mb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <PersonalContent />
                    </div>
        
                    <div className="col-md-7">
                        <NewPost/>
                        <PostedContent />
                    </div>
                </div>
            </div>
        </div>
    )
}
