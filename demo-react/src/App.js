import React, { Component } from 'react';

import './assets/css/base.min.css';


//components
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      </div>
    );
  }
}

export default App;
