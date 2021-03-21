import React from 'react'
import { Navbar } from '../../ui/Navbar'

import './profile.css';
import { Posts } from '../posts/Posts';
import { TimelineHeader } from '../timeline-header/TimelineHeader';

export const Profile = () => {
    return (
        <div>
            <Navbar />
            <TimelineHeader />
            <Posts />
        </div>
    )
}