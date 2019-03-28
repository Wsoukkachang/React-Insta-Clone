import React from 'react';

const Comment = props => {

    return (
        <div className="Comment">
        <h6>{props.username}</h6>
        <p>{props.text}</p>
        </div>
    );
};

export default Comment;