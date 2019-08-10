import React from 'react';
import './index.css';
import CartItem from '../cartItem';

function CartTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Delete Item</th>
        </tr>
      </thead>
      <tbody>
        {props.cart[0] &&
          props.cart.map( item =>
            <CartItem
              item={item}
              key={item.cart_id}
              deleteItem={props.deleteItem}
            />
          )
        }
      </tbody>
    </table>
  );
}

export default CartTable;
