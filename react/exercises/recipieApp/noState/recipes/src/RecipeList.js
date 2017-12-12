import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  render() {
    const recipes = this.props.recipes.map((v, i) => (
      <Recipe 
        key={i} 
        title={v.title} 
        ingredients={v.ingredients} 
        instructions={v.instructions}
        img={v.img}
      />
    ));

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

RecipeList.defaultProps = {
  recipes: [
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

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RecipeList;
