import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    //console.log(props);

    return (
        <div className="comment">
        
        <p><h6>{props.username}</h6> {props.text}</p>
        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;