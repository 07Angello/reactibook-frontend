import React from 'react';
import { PersonalContent } from './personal-content/PersonalContent';
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

                    </div>
                </div>
            </div>
        </div>
    )
}
