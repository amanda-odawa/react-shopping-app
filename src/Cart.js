import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, updateCartItem }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} updateCartItem={updateCartItem} />
          ))}
          <div className="cart-total">Total: ${calculateTotal()}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
