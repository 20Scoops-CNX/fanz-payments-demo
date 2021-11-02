import React from 'react';
import { PayloCheckout } from './index.view';
import loadingButtonImage from 'assets/ButtonLoading.svg';

const CheckoutButton = ({ onClick, imageUrl }) => {
  return (
    <PayloCheckout onClick={onClick}>
      <img src={imageUrl || loadingButtonImage} alt="checkout button" />
    </PayloCheckout>
  );
};

export default CheckoutButton;
