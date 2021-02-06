import React from 'react';
import { useSelector } from 'react-redux';
import './PersonalContent.css';
import defaultProfilePhoto from '../../../../assets/avatar.svg';
import moment from 'moment';

export const PersonalContent = () => {

    const { name, email, createdAt } = useSelector(state => state.auth);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Information</h5>
                        <p><i class="bi bi-person-fill"></i> <b className="mr-1">Name:</b> { name }</p>
                        <p><i class="bi bi-envelope"></i> <b className="mr-1">E-mail:</b> { email }</p>
                        <p><i class="bi bi-clock-fill"></i> <b className="mr-1">Joined on:</b> { moment( createdAt ).format('MMMM YYYY') }</p>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Photos</h5>
                        <div className="row mb-3">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } style={{ borderTopLeftRadius:'10px' }} />    
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } />     
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } style={{ borderTopRightRadius:'10px' }}  />   
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } />    
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } />     
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } />   
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } style={{ borderBottomLeftRadius:'10px' }}  />    
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } />     
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110` } style={{ borderBottomRightRadius:'10px' }}  />   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Friends</h5>
                        <div className="row mb-5">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="photo" alt="" src={ defaultProfilePhoto } />    
                                <b>John Doe</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
