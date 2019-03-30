import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    //console.log(props);

    return (
        <div className="Comment">
        <h6>{props.username}</h6>
        <p>{props.text}</p>
        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;