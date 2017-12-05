import React, { Component } from 'react';
import './Recipe.css';
import Ingredient from './Ingredient.js';

class Recipe extends Component {
  static defaultProps = {
    data: [
      {
        title: 'Machine Made Pancakes',
        ingredients: ['pancake mix', 'water', 'electricity'],
        instructions: 'Put the ingredients in a pancake machine and turn on',
        img: 'pancakes.jpg',
      },
    ]
  }
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
