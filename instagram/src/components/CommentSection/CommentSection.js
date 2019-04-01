import React,{ Component } from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';
// import moment from 'moment';
import AddComment from './AddComment';
import './commentSection.css';

class CommentSection extends Component {
    // console.log(props.comments);

    // // working on formatting timestamp
    // const formattedTime = moment((props.timeStamp)).format("YYYY Do MM");
    // const timeStamp = moment(formattedTime, "YYYYMMDD").fromNow();
    
    constructor(props) {
        super();
        this.state = {
            comments: props.comments,
            newcomment: ""
        };
    };

    inputChange = e => {
        this.setState({newcomment: e.target.value})
    };

    addNewComment = e => {
        e.preventDefault();
        
        this.setState(({comments, newcomment}) => {
            return {
                comments: [...comments, {
                    username: 'William',
                    text: newcomment
                }],
                newcomment: ""
            }
        })
    };

    render () {
        return (
            <div className = "commentSection">
                {this.state.comments.map(comment => 
                <Comment username={comment.username} text={comment.text} key={comment.text}/>
                )}

                <AddComment
                    add={this.addNewComment} 
                    inputChange={this.inputChange}
                    value={this.state.newcomment}
                />
            </div>
        );
    };
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

export default CommentSection;