import React from 'react'
import { CommentsHistory } from './commentsHistory/CommentsHistory'

export const Comments = ({ post }) => {
    return (
        <div>
            <CommentsHistory post={ post }></CommentsHistory>
        </div>
    )
}
