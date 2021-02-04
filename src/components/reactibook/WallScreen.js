import React from 'react'
import { Navbar } from '../ui/Navbar'

import './custom-styles.css';
import { TimelineHeader } from './timeline-header/TimelineHeader';

export const WallScreen = () => {
    return (
        <div>
            <Navbar />
            <TimelineHeader />
        </div>
    )
}
