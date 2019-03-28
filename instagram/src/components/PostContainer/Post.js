import React from 'react';
import './Post.css';

const Post = props => {
    console.log(props);

    return (
        <div className="user">
            <section className="container-name">
            <img className="thumbnail" src={props.thumbnail} alt='' />
            <h6>{props.username}</h6>
            </section>

            <img className="image" src={props.image} alt='' />
        </div>
        

        );
};

export default Post;

