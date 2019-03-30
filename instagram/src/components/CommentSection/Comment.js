import React from 'react';

const Comment = props => {
    //console.log(props);

    return (
        <div className="comment">
        
        <p><h6>{props.username}</h6> {props.text}</p>
        </div>
    );
};

export default Comment;