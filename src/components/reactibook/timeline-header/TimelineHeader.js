import React from 'react';
import './TimelineHeader.css';
import defaultProfilePhoto from '../../../assets/avatar.svg';
import { useSelector } from 'react-redux';

export const TimelineHeader = () => {
    const defaultCoverPhoto = 'https://cdn.pixabay.com/photo/2019/02/21/20/03/leaves-4012127_960_720.jpg';

    const { name, profilePhoto, coverPhoto } = useSelector(state => state.auth);

    return (
        <div className="timeline-container">
            <div className="container">
                <div className="row">
                    <div className="mx-auto text-center cover-container">
                        <img className="img-fluid cover-photo" alt="" src={coverPhoto ? coverPhoto : defaultCoverPhoto} />
                        <div className="profile-photo">
                            <img alt="" src={ profilePhoto ? profilePhoto : defaultProfilePhoto } />
                        </div>
                    </div>

                </div>

                <div className="mx-auto text-center mt-2">
                    <div>
                        <h1>{ name }</h1>
                    </div>
                    <div>
                        <a href="/wall" alt="presentation" className="nav-link disabled">
                            A passionate Full Stack developer
                        </a>
                    </div>
                </div>

                <hr className="separator"></hr>

                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/wall">
                            Posts
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/wall">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/wall">
                            Friends 9
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/wall">
                            Photos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/wall">
                            More
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
