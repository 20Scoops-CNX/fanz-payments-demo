import React from 'react';
import { rooms } from 'mocks';
import {
  Wrapper,
  Title,
  BookBox,
  StayDates,
  Total,
  Card,
  DateAvaliable,
  Button,
  DescriptionTotal,
  ClockIcon,
  CalendarIcon,
  SoftColor
} from './index.view';
import { IbelsaRoute } from 'utils/index';

const Rooms = () => {
  return (
    <Wrapper>
      <Wrapper.TopContent>
        <BookBox>
          <BookBox.FirstBox>
            <DateAvaliable>
              <ClockIcon />
              Only date available
            </DateAvaliable>
          </BookBox.FirstBox>
          <StayDates>
            <CalendarIcon />
            <div>
              <span>Stay Dates</span>
              <div>Fri, Sep 25, 2020 - Sat, Sep 26, 2020</div>
            </div>
          </StayDates>
          <Total>
            <span>Total for Stay</span>
            <div>100 EUR x 1</div>
          </Total>
        </BookBox>
        <Title>Rooms</Title>
      </Wrapper.TopContent>
      <Wrapper.BottomContent>
        {rooms.map((room, i) => (
          <Card key={i}>
            <Card.Img src={room.img} />
            <Card.Content>
              <Card.Description>
                <h3>{room.name}</h3>
                <DescriptionTotal>
                  <span>{room.price} EUR / Night</span>
                  <span>
                    <SoftColor>X1</SoftColor> {room.price.toFixed(2)} EUR
                  </span>
                </DescriptionTotal>
              </Card.Description>
              <Button
                href={
                  IbelsaRoute()
                    ? `/ibelsa/rooms/${room.id}`
                    : `/rooms/${room.id}`
                }
              >
                Choose Room
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Wrapper.BottomContent>
    </Wrapper>
  );
};
export default Rooms;
