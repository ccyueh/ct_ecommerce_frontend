import React from 'react';
import './index.css';
import ProductCard from '../productCard';

function ProductRows(props) {
  return (
    <div className="row">
      {props.products[0] &&
        props.products.map( product =>
          <ProductCard
            key={product.product_id}
            product={product}
            addItem={props.addItem}
          />
        )
      }
    </div>
  );
}

export default ProductRows;
