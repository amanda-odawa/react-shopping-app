import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <p>
        {product.name} - ${product.price}
      </p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
