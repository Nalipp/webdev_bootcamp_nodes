import React, { Component } from 'react';
import './Recipe.css';
import Ingredient from './Ingredient.js';

class Recipe extends Component {
  render() {
    const data = [
      {
        title: 'Pasta',
        ingredients: ['noodles', 'pasta sauce', 'french bread'],
        instructions: 'cook the noodles in a bowl and put the sauce on them. then eat the bread',
        img: 'pasta.jpg',
      },
      {
        title: 'Milkshake',
        ingredients: ['milk', 'strawberries', 'sugar'],
        instructions: 'mix together all the ingredients',
        img: 'milkshake.jpg',
      },
      {
        title: 'Advocado toast',
        ingredients: ['toast', 'advocado'],
        instructions: 'mash the advocado up and put it on the toast',
        img: 'avoToast.jpg',
      },
    ]
    return (
      data.map((v, i) => {
        return <div key={i} className="recipeCard">
          <img src={v.img} alt={v.title + ' image'} />
          <div id="container">
            <h3>{v.title}</h3>
            <Ingredient text={v.ingredients} />
            <p>instructions :</p>
            {v.instructions} 
          </div>
        </div>
      })
    );
  }
}

export default Recipe;
