import React, { Component } from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

class Recipe extends Component {
  render() {
    const {title, instructions, img} = this.props;
    const ingredients = this.props.ingredients.map((v, i) => (
      <li key={i}>{v}</li>
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-content">
          <img src={img} alt={title}/>
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients :</h4>
          <p>
            {ingredients}
          </p>
          <h4>Instructions :</h4>
          <p>
            {instructions}
          </p>
        </div>
      </div>
    )
  }
}

Recipe.propTypes = {
  title : PropTypes.string.isRequired,
  instructions : PropTypes.string.isRequired,
  ingredients : PropTypes.arrayOf(PropTypes.string).isRequired,
  img : PropTypes.string.isRequired,
}

export default Recipe;
