import React from "react";

const CartItem = ({ item, updateCart }) => {
  return (
    <div>
      <p>
        {item.name} - ${item.price} x {item.quantity}
      </p>
      <button onClick={() => updateCart(item.id, item.quantity - 1)}>
        -
      </button>
      <button onClick={() => updateCart(item.id, item.quantity + 1)}>
        +
      </button>
    </div>
  );
};

export default CartItem;
