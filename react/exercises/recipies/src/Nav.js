import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    const listItem = {margin: '20px'};
    const list = {
      display: 'flex',
      listStyle: 'none',
      alignItems: 'baseline',
    };
    return (
      <nav>
        <ul style={list}>
          <li id="logo" style={listItem}>Recipe App</li>
          <li style={listItem}>New Recipe</li>
          <li style={listItem}>Home</li>
          <li style={listItem}>About</li>
          <li style={listItem}>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
