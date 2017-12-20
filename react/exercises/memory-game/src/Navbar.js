import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    const {resetGame} = this.props
    return (
      <nav>
        <li id="title">Memory Game</li>
        <li id="reset" onClick={resetGame}>New Game</li>
      </nav>
    )
  }
}

Navbar.defaultProps = {
  resetGame() {}
}

export default Navbar
