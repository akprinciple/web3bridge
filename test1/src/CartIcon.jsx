import React from 'react'

const CartIcon = ({ cart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <span className="cart-icon">
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="">{totalQuantity}</span> 
    </span>
  );
};


export default CartIcon