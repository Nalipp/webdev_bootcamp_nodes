import React from 'react';

let Box = ({color}) => {
  const boxStyle = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    background: color,
  }
  return(<div style={boxStyle}></div>)
}

export default Box;
