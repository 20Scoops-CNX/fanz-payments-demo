import React from 'react';
import {
  Header,
  Title,
  Content,
  TextLeft,
  ImageRight,
  VericalText,
  Description
} from './index.view';
import { ReactComponent as HotelLogo } from 'assets/Logo.svg';
import { IbelsaRoute } from 'utils/index';

const { Logo, BookButton } = Header;

const Home = () => {
  return (
    <div>
      <Header>
        <Logo>
          <HotelLogo />
        </Logo>
        <BookButton href={IbelsaRoute() ? '/ibelsa/rooms' : '/rooms'}>
          Book now
        </BookButton>
      </Header>
      <Content>
        <TextLeft>
          <Title>
            Perfect <br /> Palace
          </Title>
          <Description>
            <VericalText>Best</VericalText>
            <VericalText>vacation</VericalText>
            <VericalText>for</VericalText>
            <VericalText>you</VericalText>
          </Description>
        </TextLeft>
        <ImageRight />
      </Content>
    </div>
  );
};
export default Home;
