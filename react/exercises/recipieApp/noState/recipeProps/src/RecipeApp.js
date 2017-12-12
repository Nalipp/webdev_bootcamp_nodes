import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    const obj = [
      {
        title: "pasta",
        ingredients: ['flour', 'water'],
        instructions: 'Mix ingredients',
        img: 'spaghetti.jpg',
      },
      {
        title: "milkshake",
        ingredients: ['milk', 'strawberries'],
        instructions: 'Put in a blender, and push the button',
        img: 'milkshake.jpg',
      },
      {
        title: "pasta",
        ingredients: ['toast', 'advocado'],
        instructions: 'Make the toast then put the advocado on it',
        img: 'avoToast.jpg',
      },
    ];
    return (
      obj.map((v, i) => {
        return <div key={i} className="App">
          <Recipe
            title={v.title}
            ingredients={v.ingredients}
            instructions={v.instructions}
            img={v.img}
            />
        </div>
      })
    );
  }
}

export default RecipeApp;
