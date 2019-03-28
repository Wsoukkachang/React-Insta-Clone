import React from 'react';
import Comment from "./Comment";

const CommentSection = props => {
    console.log(props.comments);

    return (
        <div className = "CommentSection">
        {props.comments.map(comment => 
        <Comment username={comment.username} text={comment.text}/>
        )}
        </div>
    );
};

export default CommentSection;