import React, {Component} from 'react';

class Ingredient extends Component {
  render() {
    const listItem = {
      marginLeft: '16px',
    };
    return (
      <p>
        ingredients : {this.props.text.map((v, i) => <li key={i} style={listItem}>{v}</li>)}
      </p>)
  }
}

export default Ingredient;
