import React, {Component} from 'react';

class ProductRow extends Component {
  render() {
    const {price, name, stocked} = this.props.product;
    let stockedStyle = {};
    if (!stocked) stockedStyle = {color: 'red'}
    return (
      <tr>
        <td style={stockedStyle}>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

export default ProductRow;
