import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <div>
      <h1>Simple E-Commerce Cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} updateCartItem={updateCartItem} />
    </div>
  );
};

export default App;
