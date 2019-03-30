import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-container">
          {dummyData.map(post => <PostContainer post={post} key={post.timestamp}/>)}
        </div>
      </div>
      
    );
  }
}

export default App;
