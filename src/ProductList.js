import React from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "/images/tshirt.jpeg" },
  { id: 2, name: "Jeans", price: 40, image: "/images/jeans.jpg" },
  { id: 3, name: "Sneakers", price: 60, image: "/images/sneakers.jpg" },
  { id: 4, name: "Hat", price: 15, image: "/images/hat.jpg" },
  { id: 5, name: "Socks", price: 5, image: "/images/socks.jpg" },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2> {/* "Products" title */}
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
