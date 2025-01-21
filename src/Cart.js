import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, updateCartItem }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateCartItem={updateCartItem}
            />
          ))}
          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
