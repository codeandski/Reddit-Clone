import React from 'react';
import './Comment.scss';


export function Comment(props: any) {
    return  <div className="post-comment-container">
                <div className="post-comment-text">{props.data.body}</div>
            </div>
}