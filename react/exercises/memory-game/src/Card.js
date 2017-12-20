import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const {id, color, showing, onClick} = this.props;
    const style = {};
    if (showing) style.background = color;
    return(
      <div className="box" 
           onClick={() => onClick(id, color)}
           style={style}>
      </div>
    )
  }
}

Card.defaultProps = {
  onClick() {}
}

export default Card;
