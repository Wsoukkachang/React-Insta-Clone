import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const Post = props => {
    console.log(props);

    return (
        <div className="container-user"> 
        
            <section className="container-name">
            <img className="thumbnail" src={props.thumbnail} alt='' />
            <h5>{props.username}</h5>
            </section>

            <img className="image" src={props.image} alt='' />
        </div>
        

        );
};

Post.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number
} 

export default Post;

