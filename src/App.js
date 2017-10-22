import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation  from './components/nav_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation title="Reddit Viewer" links={['a','b']} dropdown={['Action','Another action']} pullright={['a','b']} />
      </div>
    );
  }
}

export default App;
