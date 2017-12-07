import React, {Component} from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component {
  render() {
    let categoryName = null;
    let row = [];
    this.props.products.forEach((v, i) => {
      if (categoryName !== v.category) {
        row.push(<ProductCategoryRow key={i} categoryName={v.category} />);
      } else {
        row.push(<ProductRow key={i} product={v} />);
      }
      categoryName = v.category;
    }); 
    return (
      <table>
        <thead>
          <tr style={{fontWeight: 'bold'}}>
            <td>Name</td> 
            <td>Price</td>
          </tr>
        </thead> 
        <tbody>
          {row}
        </tbody> 
      </table>
    )
  }
}

export default ProductTable;
