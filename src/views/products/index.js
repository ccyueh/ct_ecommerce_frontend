import React, { Component } from 'react';
import './index.css';
import ProductRows from '../../components/productRows';
import Checkout from '../checkout';
import localProducts from '../../products.json';

class Products extends Component {
  constructor() {
    super();

    this.state = {
      'products': []
    }
  }

  loadProducts = async(e) => {
    let URL = 'http://localhost:5000/api/add';

    for (let i in localProducts) {
      let p = localProducts[i];
      let response = await fetch(URL, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "name": p.name,
          "price": p.price,
          "description": p.description,
          "image_url": p.img_url
        }
      });
    }
  }

  getProducts = async(e) => {
    let URL = 'http://localhost:5000/api/retrieve';
    let response = await fetch(URL, {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "table": "products"
      }
    });

    let data = await response.json();
    if (data.products) {
      this.setState({ 'products': data.products });
    } else {
      alert(data.error);
    }
  }

  addItem = async(id) => {
    console.log(id);
    let URL = 'http://localhost:5000/api/add';

    let response = await fetch(URL, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "product_id": id
      }
    });
    let data = await response.json();
    if (data.success) {
      alert(data.success);
    } else {
      alert(data.error);
    }
  }

  componentDidMount() {
    //this.loadProducts();
    this.getProducts();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Products</h1>
        <div className="row">
          <div className="col-md-8">
            <ProductRows
              products={this.state.products}
              addItem={this.addItem}
            />
          </div>
          <div className="col-md-4">
            <Checkout />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
