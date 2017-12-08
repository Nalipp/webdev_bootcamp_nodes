import React from 'react';

function Box(props) {
  const boxStyle = {
    width: '55px',
    height: '55px',
    display: 'inline-block',
    background: props.color,
  }
  return(<div style={boxStyle}></div>)
}

export default Box;
