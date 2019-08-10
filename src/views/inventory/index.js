import React, { Component } from 'react';
import './index.css';
import ProductTable from '../../components/productTable';
import AddProductForm from '../../components/addProductForm';
import RemoveProductForm from '../../components/removeProductForm';
import fetchProducts from '../products/fetchProducts.js';

class Inventory extends Component {
  constructor() {
    super();

    this.state = {
      'products': []
    }
  }

  getProducts = async(e) => {
    let products = await fetchProducts();
    this.setState({ products })
  }

  addProduct = async(e) => {
    e.preventDefault();

    let URL = 'http://localhost:5000/api/add';

    let name = e.target.elements.name.value;
    let price = e.target.elements.price.value;
    let description = e.target.elements.description.value;
    let image_url = e.target.elements.image_url.value;

    let response = await fetch(URL, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "name": name,
        "price": price,
        "description": description,
        "image_url": image_url
      }
    });

    let data = await response.json();
    if (data.success) {
      alert(data.success);
      this.getProducts();
    } else {
      alert(data.error);
    }
  }

  removeProduct = async(e) => {
    e.preventDefault();

    if (!window.confirm('Are you sure you want to delete this product?'))
    {
      return;
    }

    let URL = 'http://localhost:5000/api/delete';

    let product_id = e.target.elements.product_id.value;

    let response = await fetch(URL, {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json",
        "product_id": product_id
      }
    });

    let data = await response.json();
    if (data.success) {
      alert('Item removed from inventory.')
      this.getProducts();
    } else {
      alert('Sorry, try again.')
    }
  }

  componentDidMount() {
    //this.loadProducts();
    this.getProducts();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Inventory</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Add Products</h2>
            <AddProductForm addProduct={this.addProduct} />
          </div>
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center">Remove Products</h2>
            <RemoveProductForm removeProduct={this.removeProduct} />
          </div>
          <div className="col-md-12">
            <h2 className="text-center">Products List</h2>
            <ProductTable products={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
