import React from "react";

const CartItem = ({ item, updateCartItem }) => {
  const handleChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    updateCartItem(item.id, quantity);
  };

  return (
    <div>
      <p>
        {item.name} - ${item.price} x
        <input
          type="number"
          min="0"
          value={item.quantity}
          onChange={handleChange}
          style={{ width: "50px", marginLeft: "5px" }}
        />
        <button onClick={() => updateCartItem(item.id, 0)}>Remove</button>
      </p>
    </div>
  );
};

export default CartItem;
