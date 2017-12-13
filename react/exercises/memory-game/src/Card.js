import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const {color} = this.props;
    return(
      <div className="box" style={{backgroundColor: color}}></div>
    )
  }
}

export default Card;
