import React from "react";

const CartItem = ({ item, updateCartItem }) => {
  const handleQuantityChange = (e) => {
    updateCartItem(item.id, parseInt(e.target.value, 10));
  };

  const handleRemove = () => {
    updateCartItem(item.id, 0);
  };

  return (
    <div className="cart-item">
      <p>{item.name} x {item.quantity} - ${item.price * item.quantity}</p>
      <div>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="0"
          className="quantity"  // Add the quantity class for centering
        />
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
