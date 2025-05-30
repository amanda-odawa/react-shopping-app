import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
       <img
        src={product.image}
        alt={product.name}
        style={{ width: "98%", height: "200px", objectFit: "cover", borderRadius: "3px" }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
