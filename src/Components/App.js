import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  const products = [
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Sneakers", price: 60 },
    { id: 4, name: "Hat", price: 15 },
    { id: 5, name: "Socks", price: 5 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCart = (id, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <h1>Simple E-Commerce Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
};

export default App;
