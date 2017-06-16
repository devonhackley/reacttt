import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="row">
        <ul className="main-nav">
          <li><a href="#">FOOD</a></li>
          <li><a href="#">RECIPES</a></li>
          <li><a href="#">BLOG</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
