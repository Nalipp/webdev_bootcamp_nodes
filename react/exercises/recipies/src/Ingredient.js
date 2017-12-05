import React, {Component} from 'react';

class Ingredients extends Component {
  render() {
    const ingredients = this.props.ingredients.map((v, i) => (
      <li key={i} style={{marginLeft: '16px'}}>{v}</li>
    ));

    return (
      <ul>
        ingredients : {ingredients}
      </ul>)
  }
}

export default Ingredients;
