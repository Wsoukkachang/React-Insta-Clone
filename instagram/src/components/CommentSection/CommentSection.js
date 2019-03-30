import React from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';
import './commentSection.css';

const CommentSection = props => {
    console.log(props.comments);

    return (
        <div className = "commentSection">
            {props.comments.map(comment => 
            <Comment username={comment.username} text={comment.text} key={comment.text}/>
            )}
            
            <div className="timeStamp">{props.timeStamp}</div>
            <input className="addComment" name="comment" placeholder="Add a comment..." />
        </div>
    );
};

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
    timeStamp: PropTypes.string
};

export default CommentSection;