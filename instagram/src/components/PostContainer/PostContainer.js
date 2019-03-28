import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            <Post 
            username={props.post.username}
            thumbnail={props.post.thumbnailUrl}
            image={props.post.imageUrl}
            likes={props.post.likes}
            />

            <CommentSection comments={props.post.comments}/>
        </div>
        );
};

export default PostContainer;