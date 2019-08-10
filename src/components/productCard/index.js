import React from 'react';
import './index.css';

function ProductCard(props) {
  return (
    <div className="col-md-4 extra-margin-md">
      <div className="card">
        <img src={props.product.image_url} alt="Placeholder" class="card-img" />
        <div className="card-title">{props.product.name}</div>
        <div className="card-subtitle">${Number(props.product.price).toFixed(2)}</div>
        <div className="card-text">{props.product.description}</div>
        <button
          onClick={() => props.addItem(props.product.product_id)}
          className="btn btn-success">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
