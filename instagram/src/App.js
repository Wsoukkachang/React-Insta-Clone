import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
          {this.state.data.map(post => <PostContainer post={post} key={post.timestamp}/>)}
        </div>
      </div>
      
    );
  }
}

export default App;
