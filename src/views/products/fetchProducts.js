import React from 'react';

const fetchProducts = async(e) => {
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
    return data.products;
  }
  return [];
};

export default fetchProducts;
