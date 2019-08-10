import React, { Component } from 'react';
import './index.css';

function AddProductForm(props) {
  return (
    <form onSubmit={props.addProduct}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" />
        <label>Price</label>
        <input type="text" className="form-control" name="price" />
        <label>Description</label>
        <textarea type="text" className="form-control" name="description" />
        <label>Image URL</label>
        <input type="text" className="form-control" name="image_url" />
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  );
}

export default AddProductForm;
