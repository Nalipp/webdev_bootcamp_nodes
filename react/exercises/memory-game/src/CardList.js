import React, { Component } from 'react';
import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';
import Navbar from './Navbar';

const COLORS = ['crimson', 'lawngreen', 'dodgerblue', 'pink', 'violet', 'orange', 'yellow'];

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCards: mapColors(COLORS),
      clickCount: 0,
      previouslyClickedId: null,
      previouslyClickedColor: null,
    }
    this.resetGame = this.resetGame.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  resetGame() {
    this.setState({allCards: mapColors(COLORS)})
  }

  onClick(id, color) {
    console.log(id);
    console.log(color);
    console.log(this.state.allCards[id])
    let allCards = this.state.allCards;

    if (this.state.clickCount === 0) {
      allCards[id].showing = true;
      this.setState({previouslyClickedId: id});
      this.setState({clickCount: 1});
    }
    if (this.state.clickCount === 1) {
      if (this.state.previouslyClickedColor === color) {
        console.log('success!!')
        allCards[id].showing = true;
      }
      else {
        allCards[this.state.previouslyClickedId].showing = false;
      }
      this.setState({clickCount: 0})
    }

    this.setState({allCards});
  }

  render() {
    const cards = this.state.allCards.map((v, i) => (
      <Card key={i} id={v.id} color={v.color} showing={v.showing} onClick={this.onClick}/>
    ));
    return (
      <div className="cardList">
        <Navbar resetGame={this.resetGame}/>
        {cards}
      </div>
    );
  }
}

let mapColors = (arr) => {
  let arrCopy1 = arr.slice();
  let arrCopy2 = arr.slice();
  let returnArr = [];
  let currentId = 0;

  for (let i = 0; i < arr.length; i++) {
    let rand1 = Math.floor(Math.random() * arrCopy1.length);
    let rand2 = Math.floor(Math.random() * arrCopy2.length);
    returnArr.push({id: currentId += 1, color: arrCopy1.splice(rand1, 1), showing: false});
    returnArr.push({id: currentId += 1, color: arrCopy2.splice(rand2, 1), showing: false});
  }
  return returnArr;
}

export default CardList;
