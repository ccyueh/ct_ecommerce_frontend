import React from 'react';
import './index.css';

function ProductRow(props) {
  return (
    <tr>
      <td>{props.product.product_id}</td>
      <td>{props.product.name}</td>
      <td>${Number(props.product.price).toFixed(2)}</td>
      <td colSpan="2">{props.product.description}</td>
    </tr>
  );
}

export default ProductRow;
