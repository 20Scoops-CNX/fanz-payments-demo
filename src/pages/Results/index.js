import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { find } from 'lodash';
import {
  Header,
  Content,
  BackLink,
  WrapperImage,
  Title,
  Description,
  ClickHere
} from './index.view';
import { ReactComponent as HotelLogo } from 'assets/Logo.svg';
import { rooms } from 'mocks';
import { IbelsaRoute } from 'utils/index';

const { Logo } = Header;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const Results = () => {
  const query = useQuery();
  const { id, result } = useParams();

  const room = find(rooms, { id });
  if (!room) return null;

  const trasId = query.get('transaction_id');
  const isSuccess = result === 'success';

  return (
    <div>
      <Header error={!isSuccess}>
        <Logo error={!isSuccess}>
          <HotelLogo />
        </Logo>
      </Header>
      <Content>
        <WrapperImage error={!isSuccess}>
          <img src={room.img} alt="room" />
        </WrapperImage>
        <Title>{!isSuccess ? 'Something went wrong' : 'Success'}</Title>
        <div>
          {!isSuccess ? (
            <Description>
              Sorry, something went wrong. We're working on it and we'll get it
              fixed as soon as we can. We apologise for the delay and any
              convenience this situation may have caused. Thank you again for
              choosing Roompalace, and we hope to be your choice for the future
              online reservations.
            </Description>
          ) : (
            <>
              <Description>
                Check your email for a booking confirmation. We'll see you soon!
                You can check in on arrival from 1:00 PM on Friday, September
                25, 2020.
              </Description>
              <Description>
                Booking Ref. R-BE-{trasId}
                <br />
                To print your booking <ClickHere>click here</ClickHere>
              </Description>
            </>
          )}
        </div>

        <BackLink to={IbelsaRoute ? '/ibelsa' : '/'}>BACK TO HOME</BackLink>
      </Content>
    </div>
  );
};
export default Results;
