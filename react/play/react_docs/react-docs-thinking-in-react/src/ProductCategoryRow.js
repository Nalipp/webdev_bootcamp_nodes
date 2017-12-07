// import React, {Component} from 'react';
import React from 'react';

// class ProductCategoryRow extends Component {
//   render() {
//     const categoryTitle = {padding : '16px 0 8px 40px', fontWeight: 'bold'};
//     return (
//       <tr>
//         <td style={categoryTitle}>{this.props.categoryName}</td>
//       </tr>
//     )
//   }
// }

function ProductCategoryRow(props) {
  const categoryTitle = {padding : '16px 0 8px 40px', fontWeight: 'bold'};
  return (
    <tr>
      <td style={categoryTitle}>{props.categoryName}</td>
    </tr>
  )
}

export default ProductCategoryRow;
