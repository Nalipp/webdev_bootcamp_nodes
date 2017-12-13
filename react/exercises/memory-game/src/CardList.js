import React, { Component } from 'react';
import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';


class CardList extends Component {
  render() {
    const cards = this.props.allCards.map((c, i) => (
      <Card key={i} color={c.color}/>
    ));
    return (
      <div className="CardList">
        {cards}
      </div>
    );
  }
}

CardList.defaultProps = {
  allCards: [
    {color: 'crimson'}, 
    {color: 'lawngreen'}, 
    {color: 'dodgerblue'}, 
    {color: 'pink'}, 
    {color: 'violet'}, 
    {color: 'orange'}, 
    {color: 'yellow'}, 
  ]
}

CardList.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardList;
