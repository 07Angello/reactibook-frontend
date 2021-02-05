import React, { useState } from 'react';
import './auth-styles.css';
import ReactTooltip from 'react-tooltip';
import { RegisterModal } from './RegisterModal';
import { useDispatch } from 'react-redux';
import { loginOpenModal } from '../../redux/actions/loginModal';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [loginFormValues, setLoginFormValues] = useState({
        email: '',
        password: ''
    })

    const [passwordIsValid, setPasswordIsValid] = useState(true);

    const [emailIsValid, setEmailIsValid] = useState(true)
    
    const { email, password } = loginFormValues;

    const handleInputChange = ({ target }) => {
        setLoginFormValues({
            ...loginFormValues,
            [target.name]: target.value
        });

        setEmailIsValid(true);
        setPasswordIsValid(true);
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        if (email.length === 0 || !email) {
            return setEmailIsValid(false);
        }

        if (password.length === 0 || !password){
            return setPasswordIsValid(false);
        }
        setEmailIsValid(true);
        setPasswordIsValid(true);

        console.log( loginFormValues )
    }

    const goToMyLinkedIn = () => {
        window.open('https://www.linkedin.com/in/gabriel-angello-antonelly-g%C3%A1mez-b1b623195/','AngelloAntonelly');
    }

    const openRegisterModal = () => {
        dispatch( loginOpenModal() );
    }

    return (
        <div className="w-100 h-100 row d-flex justify-content-center align-items-center" style={{ position: 'absolute' }}>
            <ReactTooltip type="info" place="bottom" effect="solid" />
            <div className="row no-margin login-custom">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="reactibook-logo">Reactibook</h1>
                    <h2 style={{ fontWeight: 'lighter' }}>Recent logins</h2>
                    <h6  style={{ fontWeight: 'lighter' }}>Click your picture or add an account.</h6>
                    <div className="d-flex flex-row justify-content-around align-items-center">
                        <div className="card login-card" onClick={ goToMyLinkedIn } data-tip="Click me!">
                            <span className="badge bg-linkedIn"><i className="bi bi-linkedin"></i></span>
                            <div className="img-card-container">
                                <img className="card-img-top img-zoom" src="https://scontent.fsap4-1.fna.fbcdn.net/v/t1.0-1/p160x160/87971700_10216995627031457_8324324086314434560_n.jpg?_nc_cat=108&amp;ccb=2&amp;_nc_sid=dbb9e7&amp;_nc_ohc=a01Zcr_IXr8AX98PnTy&amp;_nc_ht=scontent.fsap4-1.fna&amp;tp=6&amp;oh=b5868c87ce7bc3734f3f6f0651d24a7c&amp;oe=603F3F92" />
                            </div>
                            <div className="card-body" style={{ padding: '0px' }}>
                                <h5 className="card-title custom-crd-title">Angello Gámez</h5>
                            </div>
                        </div>
                        <div className="card login-card">
                            <div className="d-flex justify-content-center align-items-center login-add-account">
                                <i className="bi bi-plus-circle-fill"></i>
                            </div>
                            <div className="card-body" style={{ padding: '0px' }}>
                                <h5 className="card-title custom-crd-title" style={{ color: '#1877f2', textAlign: 'center' }}>Add Account</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center move">
                    <form
                        className="login-form needs-validation"
                        onSubmit={ loginSubmit }
                    >
                        <div className="form-group">
                            <input
                                type="email"
                                className={`form-control ${ !emailIsValid && 'is-invalid' }`}
                                placeholder="Enter email"
                                name="email"
                                value={ email }
                                onChange={ handleInputChange }
                                id="email"

                            ></input>
                            <div className="invalid-feedback">
                                The email is required, can not be empty.
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className={`form-control ${ !passwordIsValid && 'is-invalid' }`}
                                placeholder="Password"
                                name="password"
                                value={ password }
                                onChange={ handleInputChange }
                                id="password"

                            ></input>
                            <div className="invalid-feedback">
                                The password is required, can not be empty.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Log In</button>
                        <p className="text-center mt-3 mb-1 text-primary">Forgotten Password?</p>

                        <hr className="separator"></hr>

                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <button onClick={ openRegisterModal } type="button" className="btn btn-success btn-lg mt-2 mb-1">Create Account</button>
                        </div>
                    </form>
                    <p><b>Create a Page</b> for a celebrity, band or business.</p>
                </div>
            </div>

            <RegisterModal />
        </div>
    )
}
