import React, { Component } from 'react';
import './index.css';

function RemoveProductForm(props) {
  return (
    <form onSubmit={props.removeProduct}>
      <div className="form-group">
        <label>Product ID</label>
        <input type="number" className="form-control" name="product_id" />
      </div>
      <button type="submit" className="btn btn-primary">Remove Product</button>
    </form>
  );
}

export default RemoveProductForm;
