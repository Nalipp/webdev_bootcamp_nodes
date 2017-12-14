import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const {color, onColorClicked} = this.props;
    return(
      <div className="box" 
           onClick={() => onColorClicked(color)}
           style={{backgroundColor: color}}>
      </div>
    )
  }
}

export default Card;
