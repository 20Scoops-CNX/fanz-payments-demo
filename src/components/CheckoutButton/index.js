import React from 'react';
import { PayloCheckout } from './index.view';

const CheckoutButton = ({ handleClick, imageUrl }) => {
  return (
    <PayloCheckout onClick={handleClick}>
      <img src={imageUrl} alt="checkout button" />
    </PayloCheckout>
  );
};

export default CheckoutButton;
