import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { find } from 'lodash';
import { clientId, secretKey } from 'constants/merchant';
import {
  Wrapper,
  Title,
  RoomDetail,
  PriceDetail,
  RoomName,
  BookingDetailSummary,
  CheckIn,
  CheckOut,
  Total,
  UserDetails,
  Avatar,
  Name,
  Lastname,
  Email,
  TotalPrice,
  WrapperCheckout,
  PersonalTitle,
  HotelCurrency,
  SoftColor,
  ErrorMessage
} from './index.view';

import imageProfile from 'assets/ImageProfile.png';
import { ReactComponent as User } from 'assets/User.svg';
import Loading from 'components/Loading';
import { rooms } from 'mocks';
import CheckoutButton from 'components/CheckoutButton';

const Room = () => {
  const [error, setError] = useState('');
  const [buttonImage, setButtonImage] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const room = find(rooms, { id });

  const fetchConfig = () => {
    setLoading(true);
    fetch(`https://staging-api-pay.fanz.io/v1/payments/${clientId}/button`)
      .then(response => {
        setButtonImage(response.url);
        setLoading(false);
      })
      .catch(err => {
        err.json().then(errorMessage => {
          setError(errorMessage.message);
          setLoading(false);
        });
      });
  };

  const handleCheckout = () => {
    setLoading(true);
    fetch('https://staging-api-pay.fanz.io/v1/payment/request', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: secretKey
      },
      body: JSON.stringify({
        // Please note this key is for demo only *recomended use in server side
        amount: room.price,
        name: 'Markus Müller',
        email: 'fanzmerchant1@gmail.com',
        success_url: `https://demo.fanz.io/${room.id}/success`,
        fail_url: `https://demo.fanz.io/${room.id}/fail`,
        back_url: `https://demo.fanz.io/rooms/${id}`
      })
    })
      .then(function(response) {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(function(data) {
        window.location.assign(data.url);
      })
      .catch(err => {
        err.json().then(errorMessage => {
          setError(errorMessage.message);
          setLoading(false);
        });
      });
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  if (!room) return null;

  return (
    <Wrapper>
      <Wrapper.TopContent>
        <Title>Check Out</Title>
      </Wrapper.TopContent>
      <Wrapper.BottomContent>
        <RoomDetail>
          <img src={room.img} alt="room" />
          <RoomName>{room.name}</RoomName>
          <BookingDetailSummary>
            <CheckIn>
              <strong>Check IN</strong>
              Fri, Sep 25, 2020
            </CheckIn>
            <CheckOut>
              <strong>Check OUT</strong>
              Sat 26, Sep 30, 2020
            </CheckOut>
            <Total>
              <strong>Total for Stay</strong>
              {room.price.toFixed(2)} EUR <SoftColor>x 1</SoftColor>
            </Total>
          </BookingDetailSummary>
          <HotelCurrency>
            <strong>
              {room.price.toFixed(2)} EUR Total for stay in hotel’s currency
            </strong>
            <br /> Estimted government taxes and fees - Included
          </HotelCurrency>
        </RoomDetail>

        <PriceDetail>
          <PersonalTitle>
            <User /> Personal Information
          </PersonalTitle>
          <UserDetails>
            <Avatar src={imageProfile} alt="profile" />
            <Name>
              <span>Name</span>
              Markus
            </Name>
            <Lastname>
              <span>Lastname</span>
              Müller
            </Lastname>
            <Email>
              <span>Email Address</span>
              markusmuller@gmail.com
            </Email>
          </UserDetails>

          <TotalPrice>
            <div>Total Price</div>
            {room.price.toFixed(2)} EUR
          </TotalPrice>
          <WrapperCheckout>
            {loading && <Loading />}
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
            <CheckoutButton onClick={handleCheckout} imageUrl={buttonImage} />
          </WrapperCheckout>
        </PriceDetail>
      </Wrapper.BottomContent>
    </Wrapper>
  );
};
export default Room;
