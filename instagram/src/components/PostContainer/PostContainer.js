import React from 'react';
import './postContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post-container">
            <Post 
            username={props.post.username}
            thumbnail={props.post.thumbnailUrl}
            image={props.post.imageUrl}
            likes={props.post.likes}
            />

            <CommentSection comments={props.post.comments} timeStamp={props.post.timestamp}/>
        </div>
        );
};

export default PostContainer;