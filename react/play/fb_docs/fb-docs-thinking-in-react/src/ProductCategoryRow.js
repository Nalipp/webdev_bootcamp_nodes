import React, {Component} from 'react';

class ProductCategoryRow extends Component {
  render() {
    const categoryTitle = {padding : '16px 0 8px 40px', fontWeight: 'bold'};
    return (
      <tr>
        <td style={categoryTitle}>{this.props.categoryName}</td>
      </tr>
    )
  }
}

// functional component
// function ProductCategoryRow(i, category) {
//   const categoryTitle = {padding : '16px 0 8px 40px', fontWeight: 'bold'};
//   return (
//     <tr>
//       <td style={categoryTitle} key={i}>{category}</td>
//     </tr>
//   )
// }

export default ProductCategoryRow;
