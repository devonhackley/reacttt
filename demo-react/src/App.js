import React, { Component } from 'react';

import './assets/css/base.min.css';


//components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Home />
      <Footer />
      </div>
    );
  }
}

export default App;
