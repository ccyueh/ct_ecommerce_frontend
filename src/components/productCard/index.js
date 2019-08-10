import React from 'react';
import './index.css';

function ProductCard(props) {
  return (
    <div className="col-md-4 extra-margin-md">
      <div className="card">
        <img src={props.product.img_url} alt="Placeholder" class="card-img" />
        <div className="card-title">{props.product.name}</div>
        <div className="card-subtitle">${props.product.price}</div>
        <div className="card-text">{props.product.description}</div>
        <button className="btn btn-success btn-add">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
