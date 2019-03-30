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
        {dummyData.map(post => <PostContainer post={post}/>)}
      </div>
    );
  }
}

export default App;
