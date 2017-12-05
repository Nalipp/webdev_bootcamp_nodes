import React, { Component } from 'react';
import Recipe from './Recipe';
import Nav from './Nav';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div id="main">
        <Nav />
        <div id="recipies">
          <Recipe data={this.props.data}/>
        </div>
      </div>
    )
  }
}

Recipe.defaultProps = {
  data: [
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
    {
      title: 'Machine Made Pancakes',
      ingredients: ['pancake mix', 'water', 'electricity'],
      instructions: 'Put the ingredients in a pancake machine and turn on',
      img: 'pancakes.jpg',
    },
  ]
}

export default RecipeApp;
