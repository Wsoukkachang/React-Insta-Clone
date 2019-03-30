import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';

const Post = props => {
    console.log(props);

    return (
        <div className="container-user"> 
            <section className="container-name">
            <img className="thumbnail" src={props.thumbnail} alt='' />
            <h6>{props.username}</h6>
            </section>

            <img className="image" src={props.image} alt='' />
            
            <div className="interaction">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <h6>{props.likes} likes</h6>
            </div>
        </div>
        

        );
};

Post.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number
} 

export default Post;

