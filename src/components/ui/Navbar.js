import React from 'react';
import ReactTooltip from 'react-tooltip';
import './ui-styles.css';
import reactibookLogo from '../../assets/reactibook.png';

export const Navbar = () => {

    const logingOut = () => {

    }

    return (
        <div className="navbar bg mb-4 custom-navbar">
            <ReactTooltip type="info" />
            <span data-tip="Reactibook" className="navbar-brand" href="/wall" style={{ cursor:'pointer' }}>
                <img src={ reactibookLogo } alt="Reactibook" height="33" className="d-inline-block align-middle mr-2"/>
            </span>

            <button
                className="btn btn-outline-danger d-flex justify-content-center align-items-center"
                onClick={ logingOut }
            >
                <i class="bi bi-box-arrow-right mb-1 mr-2"></i>
                <span>Logout</span>
            </button>
        </div>
    )
}
