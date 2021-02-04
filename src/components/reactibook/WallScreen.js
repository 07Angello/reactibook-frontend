import React from 'react'
import { Navbar } from '../ui/Navbar'

import './custom-styles.css';
import { Posts } from './posts/Posts';
import { TimelineHeader } from './timeline-header/TimelineHeader';

export const WallScreen = () => {
    return (
        <div>
            <Navbar />
            <TimelineHeader />
            <Posts />
        </div>
    )
}
