import React from 'react';
import './index.css';

function CartItem(props) {
  return (
    <tr>
      <td>{props.item.name}</td>
      <td>${Number(props.item.price).toFixed(2)}</td>
      <td>
        <button
          onClick={() => props.deleteItem(props.item.cart_id)}
          className="btn btn-danger">X</button>
      </td>
    </tr>
  );
}

export default CartItem;
