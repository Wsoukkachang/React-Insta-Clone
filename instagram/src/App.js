import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {dummyData.map(post => <PostContainer post={post}/>)}
      </div>
    );
  }
}

export default App;
