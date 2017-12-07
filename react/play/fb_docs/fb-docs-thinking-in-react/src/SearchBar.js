import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input placeholder="Search..." />
        <div>
          <input id="inStock" type="checkbox"/>
          {' '}
          <label id="inStock">Only show products in stock</label>
        </div>
      </form>
    )
  }
}

export default SearchBar;
