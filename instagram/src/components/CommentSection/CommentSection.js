import React from 'react';
import Comment from "./Comment";
import './commentSection.css';

const CommentSection = props => {
    console.log(props.comments);

    return (
        <div className = "CommentSection">
            {props.comments.map(comment => 
            <Comment username={comment.username} text={comment.text} key={comment.text}/>
            )}
            
            <div className="timeStamp">{props.timeStamp}</div>
            <input className="addComment" name="comment" placeholder="Add a comment..." />
        </div>
    );
};

export default CommentSection;