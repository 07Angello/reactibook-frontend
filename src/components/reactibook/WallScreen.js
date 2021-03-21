import React from 'react';
import { Navbar } from '../ui/Navbar'

import './custom-styles.css';
import { Wall } from './wall/wall';

export const WallScreen = () => {
    return (
        <div>
            <Navbar />
            <Wall />
        </div>
    )
}
