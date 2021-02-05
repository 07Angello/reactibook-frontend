import React from 'react';
import { useSelector } from 'react-redux';
import './PersonalContent.css';

export const PersonalContent = () => {

    const { name } = useSelector(state => state.auth);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Intro</h5>
                        <p>{ name }</p>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Photos</h5>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Friends</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
