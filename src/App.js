import React, { Component } from 'react';
import WritePosts from './WritePosts.js'
import Data from './Review_titles.json'

class App extends Component {
  render() {
    console.log(Data)
    return (
      <WritePosts />
    );
  }
}

export default App;
