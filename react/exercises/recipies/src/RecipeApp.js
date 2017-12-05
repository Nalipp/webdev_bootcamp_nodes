import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div id="main">
        <h1>hi</h1>
        <div id="recipies">
          <Recipe />
        </div>
      </div>
    )
  }
}

export default RecipeApp;
