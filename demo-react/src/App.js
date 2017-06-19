import React, { Component } from 'react';

import './assets/css/base.min.css';


//components
import Header from './components/header/header';
import Home from './components/pages/home/homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Home   />
      </div>
    );
  }
}

export default App;
