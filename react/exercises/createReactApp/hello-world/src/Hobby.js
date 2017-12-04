import React, { Component } from 'react';

class Hobby extends Component {
  render() {
    const hobbies = ['Sleep', 'Eat', 'Play', 'Cuddle'];
    const listStyle = {
      listStyle: 'none',
      fontSize: '18px',
      textAlign: 'left',
      margin: '4px',
      background: 'crimson',
      border: '2px solid dodgerblue',
      padding: '4px',
      display: 'inline-block',
    }
    return (
      <ul style={{paddingLeft: '0px'}}>
        {hobbies.map((v, i) => <li style={listStyle} index={i}>{v}</li>)}
      </ul>
    )
  }
}

export default Hobby;
