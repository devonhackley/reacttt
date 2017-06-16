import React, { Component } from 'react';

import Navbar from '../navbar/navbar';
class Header extends Component {
  render() {
    return (
    <header>
      <Navbar />
      <div className="logo">
      <h1> GOODBYE JUNK FOOD <br />HELLO SUPER HEALTHY MEALS</h1>
      </div>

    </header>
    );
  }
}

export default Header;
