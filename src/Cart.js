import React from "react";
import CartItem from "./Components/CartItem";

const Cart = ({ cart, updateCart }) => {
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
              updateCart={updateCart}
            />
          ))}
          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
