import React, { Component } from 'react';

import Navbar from '../navbar/navbar';
class Header extends Component {
  render() {
    return (
    <header>
      <Navbar />
      <div className="logo">
      <h1> GOODBYE JUNK FOOD <br />HELLO SUPER HEALTHY MEALS</h1>
      <button type="button" className="btn btn-warning"><a href="#">Learn More</a></button>
      </div>

    </header>
    );
  }
}

export default Header;
