import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { find } from 'lodash';
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
  PayloCheckout,
  PersonalTitle,
  HotelCurrency,
  SoftColor,
  ErrorMessage
} from './index.view';

import imageProfile from 'assets/ImageProfile.png';
import checkoutButton from 'assets/ButtonLoading.svg';
import { ReactComponent as User } from 'assets/User.svg';
import Loading from 'components/Loading';
import { rooms } from 'mocks';

const Room = () => {
  const [error, setError] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const room = find(rooms, { id });

  const fetchConfig = () => {
    setLoading(true);
    fetch('https://staging-api-pay.pay-lo.com/v1/payments/config', {
      method: 'get',
      headers: {
        Authorization:
          '0653d9f4cdff4de5edbb6b22cd2d5f3b:6b0436eca2e69575d638f13d216c61579849ecb114f41ff836497f58e2eea069'
      }
    })
      .then(function(response) {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(function(data) {
        setData({ ...data.data });
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
    fetch('https://staging-api-pay.pay-lo.com/v1/payment/request', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Please note this key is for demo only *recomended use in server side
        pbkey: '0653d9f4cdff4de5edbb6b22cd2d5f3b',
        pvkey:
          '6b0436eca2e69575d638f13d216c61579849ecb114f41ff836497f58e2eea069',
        amount: room.price,
        name: 'Markus Müller',
        email: 'paylomerchant1@gmail.com',
        success_url: `https://demo.pay-lo.com/${room.id}/success`,
        fail_url: `https://demo.pay-lo.com/${room.id}/fail`,
        back_url: `https://demo.pay-lo.com/rooms/${id}`
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
            {loading ? <Loading /> : null}
            <ErrorMessage>{error ? error : null}</ErrorMessage>
            <PayloCheckout onClick={handleCheckout}>
              <img
                src={data.cashback_button_image || checkoutButton}
                alt="checkout button"
              />
            </PayloCheckout>
          </WrapperCheckout>
        </PriceDetail>
      </Wrapper.BottomContent>
    </Wrapper>
  );
};
export default Room;
