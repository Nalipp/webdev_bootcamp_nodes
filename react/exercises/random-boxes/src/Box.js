import React from 'react';

function Box(props) {
  const boxStyle = {
    width: '100px',
    height: '100px',
    display: 'inline-block',
    background: props.color,
  }
  return(<div style={boxStyle}></div>)
}

export default Box;
