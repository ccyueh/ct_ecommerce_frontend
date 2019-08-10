import React from 'react';
import './index.css';
import ProductRow from '../productRow';

function ProductTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th colSpan="2">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.products[0] &&
          props.products.map( product =>
            <ProductRow
              key={product.product_id}
              product={product}
            />
          )
        }
      </tbody>
    </table>
  );
}

export default ProductTable;
