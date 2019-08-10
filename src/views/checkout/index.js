import React, { Component } from 'react';
import './index.css';
import CartTable from '../../components/cartTable';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      'cart': []
    }
  }

  getCart = async(e) => {
    let URL = 'http://localhost:5000/api/retrieve';
    let response = await fetch(URL, {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "table": "cart"
      }
    });

    let data = await response.json();
    if (data.cart) {
      this.setState({ 'cart': data.cart });
    } else {
      alert(data.error)
    }
  }

  deleteItem = async(id) => {
    if (!window.confirm('Are you sure you want to delete this item?'))
    {
      return;
    }

    let URL = 'http://localhost:5000/api/delete';

    let response = await fetch(URL, {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json",
        "cart_id": id
      }
    });

    let data = await response.json();
    if (data.success) {
      let cart = this.state.cart;
      for (let i in cart) {
        if (cart[i].cart_id == id) {
          cart.splice(i, 1);
          break;
        }
      }
      alert('Item removed from cart.')
      this.setState({ cart });
    } else {
      alert('Sorry, try again.')
    }
  }

  componentDidMount() {
    this.getCart();
  }

  componentDidUpdate(prevProps) {
    this.getCart();
    if (this.props.cart != prevProps.cart) {
      this.getCart();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CartTable
              cart={this.state.cart}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
