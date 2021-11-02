import React from 'react';
import { PayloCheckout } from './index.view';
import checkoutButton from 'assets/ButtonLoading.svg';

const CheckoutButton = ({ onClick, imageUrl }) => {
  return (
    <PayloCheckout onClick={onClick}>
      <img src={imageUrl || checkoutButton} alt="checkout button" />
    </PayloCheckout>
  );
};

export default CheckoutButton;
