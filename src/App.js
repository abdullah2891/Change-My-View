import React, { Component } from 'react';
import logo from './cmv.png';
import './App.css';

import Navigation  from './components/nav_bar';
import PostView from './components/post_list';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="main-heading"><img src={logo} alt="Change my view" /><h1>Change My View</h1></div>
        <PostView />
      </div>
    );
  }
}

export default App;
