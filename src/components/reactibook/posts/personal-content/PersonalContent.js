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
                                <img alt="" src={ `https://picsum.photos/110/110?random=1` } style={{ borderTopLeftRadius:'10px' }} />    
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=2` } />     
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=3` } style={{ borderTopRightRadius:'10px' }}  />   
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=4` } />    
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=5` } />     
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=6` } />   
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=7` } style={{ borderBottomLeftRadius:'10px' }}  />    
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=8` } />     
                            </div>
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <img alt="" src={ `https://picsum.photos/110/110?random=9` } style={{ borderBottomRightRadius:'10px' }}  />   
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
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <p>
                        <i class="bi bi-linkedin mr-1"></i>
                        <b><a href="https://www.linkedin.com/in/gabriel-angello-antonelly-g%C3%A1mez-b1b623195/">
                            Gabriel Angello Antonelly Gamez Sandoval
                        </a></b>
                    </p>
                </div>
            </div>
            <br />
        </div>
    )
}
