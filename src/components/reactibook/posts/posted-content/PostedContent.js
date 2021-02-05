import React from 'react';
import { Post } from './Post';
import './PostedContent.cs';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const PostedContent = () => {

    const posts = [
        {
            '_id': '1234567',
            'content': 'Testing content to posting Reactibook',
            'filter': 'public',
            'createdAt': '2021-02-03T00:04:01.502Z',
            'isEdited': false,
            'user': {
                'name': 'Gabriel Angello Antonelly Gamez',
                'profilePhoto': '',
                'coverPhoto': '',
                'isActive': true
            }
        },
        {
            '_id': '7654321',
            'content': 'Other test',
            'filter': 'friends',
            'createdAt': '2021-02-03T00:04:01.502Z',
            'isEdited': false,
            'user': {
                'name': 'Gabriel Angello Antonelly Gamez',
                'profilePhoto': `https://scontent.fsap4-1.fna.fbcdn.net/v/t1.0-1/p160x160/87971700_10216995627031457_8324324086314434560_n.jpg?_nc_cat=108&amp;ccb=2&amp;_nc_sid=dbb9e7&amp;_nc_ohc=a01Zcr_IXr8AX98PnTy&amp;_nc_ht=scontent.fsap4-1.fna&amp;tp=6&amp;oh=b5868c87ce7bc3734f3f6f0651d24a7c&amp;oe=603F3F92`,
                'coverPhoto': '',
                'isActive': true
            }
        }
    ];

    const postFilter = ({ target }) => {
        console.log(target.value);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-body d-flex flex-row justify-content-between align-items-center">
                        <h5 className="card-title">Posts filter </h5>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary" value="all" onClick={ postFilter }>All</button>
                            <button type="button" className="btn btn-secondary" value="public" onClick={ postFilter }>Public</button>
                            <button type="button" className="btn btn-secondary" value="friends" onClick={ postFilter }>Friends</button>
                            <button type="button" className="btn btn-secondary" value="onlyMe" onClick={ postFilter }>Only Me</button>
                        </div>
                    </div>
                </div>
                <TransitionGroup>
                    {posts.map((post) => (
                        <CSSTransition key={post._id} timeout={400} classNames="post">
                        <Post post={post} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                <br />
            </div>
        </div>
    )
}
