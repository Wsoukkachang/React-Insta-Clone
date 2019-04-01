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
            timeStamp={props.post.timeStamp}
            />

            <CommentSection comments={props.post.comments} likes={props.post.likes}/>
        </div>
        );
};

export default PostContainer;