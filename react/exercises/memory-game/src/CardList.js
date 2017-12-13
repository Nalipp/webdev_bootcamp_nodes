import React, { Component } from 'react';
import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';

const COLORS = ['crimson', 'lawngreen', 'dodgerblue', 'pink', 'violet', 'orange', 'yellow'];

class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedColor: null,
    }
  }

  render() {
    const cards = this.props.allCards.map((c, i) => (
      <Card key={i} color={c.color}/>
    ));
    return (
      <div className="cardList">
        {cards}
      </div>
    );
  }
}

function mapColors(arr) {
  let arrCopy1 = arr.slice();
  let arrCopy2 = arr.slice();
  let returnArr = [];

  for (let i = 0; i < arr.length; i++) {
    let rand1 = Math.floor(Math.random() * arrCopy1.length);
    let rand2 = Math.floor(Math.random() * arrCopy2.length);
    returnArr.push({color: arrCopy1.splice(rand1, 1)});
    returnArr.push({color: arrCopy2.splice(rand2, 1)});
  }
  return returnArr;
}

CardList.defaultProps = {
  allCards: mapColors(COLORS)
}

CardList.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardList;
