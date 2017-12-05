import React, { Component } from 'react';
import './Recipe.css';
import Ingredient from './Ingredient.js';

class Recipe extends Component {
  render() {
    const {data} = this.props;
    const recipeCard = {
      border: '2px solid #ccc',
      flexBasis: '31%',
      margin: '20px 0',
      background: '#fff',
    }
    return (
      data.map((v, i) => {
        return <div key={i} style={recipeCard}>
          <img style={{width: '100%'}} src={v.img} alt={v.title + ' image'} />
          <div style={{padding: '15px'}}>
            <h3>{v.title}</h3>
            <Ingredient ingredients={v.ingredients} />
            <p>instructions :</p>
            {v.instructions} 
          </div>
        </div>
      })
    );
  }
}

export default Recipe;
