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
            likes: props.likes,
            liked: false,
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
    
    giveLike = () => {
        if (this.state.liked === false) {
            this.setState(prevState => {
                return {
                    likes: (prevState.likes + 1),
                    liked: true
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    likes: (prevState.likes - 1),
                    liked: false
                }
            })
        }
    }

    render () {
        let liked = this.state.liked ? "liked" : "";

        return (
            <div className = "commentSection">

                <section className="interactButtons">
                    <div className={`${liked}`}>
                        <i className="far fa-heart" onClick={this.giveLike}></i>
                    </div>
                    <i className="far fa-comment"></i>
                </section>

                <div className="likes">
                    <h6>{this.state.likes} likes</h6>
                </div>


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