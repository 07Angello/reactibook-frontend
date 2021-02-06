import React from 'react';
import './TimelineHeader.css';
import defaultProfilePhoto from '../../../assets/avatar.svg';
import { useSelector } from 'react-redux';

export const TimelineHeader = () => {
    const defaultCoverPhoto = 'https://scontent.fsap4-1.fna.fbcdn.net/v/t31.0-8/11816215_10204838170582644_7896103308581176417_o.jpg?_nc_cat=105&ccb=2&_nc_sid=19026a&_nc_ohc=0jXCHcbHBJQAX8sIrtG&_nc_ht=scontent.fsap4-1.fna&oh=23d8fec3f926005b88f31412142c84d9&oe=603F5179';

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
