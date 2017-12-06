import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <header>
        <h1>Recipe App</h1>
        <nav>
          <li>New Recipe</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </nav>
      </header>
    )
  }
}

export default Nav;
