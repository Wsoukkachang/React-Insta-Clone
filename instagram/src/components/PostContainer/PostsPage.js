import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        data: []
      }
    }
    componentDidMount() {
      this.setState({
        // data: dummyData,
        // comments: this.state.data.map(post=>
        //     post.comments.filter(comment=>comment))

            data: dummyData
      })
    }

    handleChange = e => {
      this.setState({criteria: e.target.value})
    }

    search = e => {
      e.preventDefault();
    //   console.log(`searched ${this.state.criteria}`);
    
        this.setState({data: this.state.data.filter( post => {
            return post.username === this.state.criteria 
            })
        })
    }

    render() {
    //   console.log(this.state);
    
      return (
        <div className="App">
          <SearchBar 
            value={this.state.value} 
            handleChange={this.handleChange}
            search={this.search}
          />

          <div>
            {this.state.data.map(post => 
            
            <PostContainer 
              post={post} 
              key={Date.now() + Math.random()}
            />)}
          </div>
        </div>
      );
    }
  }

  export default PostsPage; 