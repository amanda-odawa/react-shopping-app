import React from "react";

const Product = ({ product, addToCart }) => {

  const productImage = `/images/${product.name.toLowerCase()}.jpg`;

  return (
    <div className="product">
      <img src={productImage} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
