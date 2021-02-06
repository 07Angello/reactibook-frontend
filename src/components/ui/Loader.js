import React from 'react';
import reactibookLogo from '../../assets/reactibook.png';

export const Loader = () => {
    return (
        <div className="spinner col-md-12">
            <div class="double-bounce1">
                <img src={ reactibookLogo } />
            </div>
            <div class="double-bounce2">
                <img src={ reactibookLogo } />
            </div>
        </div>
    )
}
