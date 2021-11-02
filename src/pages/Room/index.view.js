import styled from 'styled-components';
import media from 'styled-media-query';
import divider from 'assets/Divider.svg';
import { convertHex } from 'utils';

const Wrapper = styled.div`
  max-width: 1344px;
  margin: 0 auto;
  padding: 0 15px;

  ${media.lessThan('large')`
    max-width: 656px;
    padding: 0;
  `}
`;
Wrapper.TopContent = styled.div`
  display: flex;
`;
Wrapper.BottomContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 65px;
  padding: 32px 0;
  ${media.lessThan('large')`
    display: block;
    padding: 0 16px;
  `}
`;
const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.loraFont()};
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  margin: 56px 0 0 0;
  padding: 0;
  ${media.lessThan('large')`
    font-weight: normal;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 40px;
  `}
  ${media.lessThan('medium')`
    padding: 0 16px;
  `}
`;
const RoomDetail = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: -32px;
    top: 0;
    width: 2px;
    height: 100%;
    background: #dbe1e6;
    ${media.lessThan('large')`
      width: 0;
    `}
  }

  > img {
    width: 100%;
    ${media.lessThan('large')`
      margin: 0 -16px;
      width: calc(100% + 32px);
    `}
  }
`;
const RoomName = styled.h2`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  ${media.lessThan('large')`
    margin-top: 32px;
  `}
`;
const PriceDetail = styled.div`
  ${media.lessThan('large')`
    margin-top: 64px;
  `}
`;
const CheckIn = styled.div``;
const CheckOut = styled.div``;
const Total = styled.div``;
const BookingDetailSummary = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 12px;
  padding: 40px 0;
  ${`${CheckIn}, ${CheckOut}, ${Total}`} {
    flex: 1;
    position: relative;
    > strong {
      display: block;
      font-weight: 500;
      padding: 8px 0;
    }
    &:not(:last-child)::before {
      content: '';
      width: 1px;
      height: 50px;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      background-image: url(${`${divider}`});
      background-repeat: no-repeat;
      background-position: center;
      ${media.lessThan('large')`
        width: 0;
      `}
    }
  }
  ${media.lessThan('medium')`
    display: block;
    padding: 10px 0;
    > div {
      padding-bottom: 15px;
    }
  `}
`;
const Avatar = styled.img`
  margin-right: 15px;
`;
const Name = styled.div``;
const Lastname = styled.div``;
const Email = styled.div``;
const UserDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 24px;
  padding: 40px 0;
  ${`${Name}, ${Lastname}, ${Email}`} {
    flex: 1;
    > span {
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;
      padding: 3px 0 10px 0;
    }
  }
  ${Email} {
    flex: 3;
    ${media.lessThan('large')`
      flex-basis: 100%;
      padding-left: 59px;
      padding-top: 15px;
    `}
  }
`;
const TotalPrice = styled.div`
  color: #000;
  background: ${convertHex('#dbe1e6', 0.2)};
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  padding: 24px;
  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
  }
`;
const WrapperCheckout = styled.div`
  background: ${convertHex('#dbe1e6', 0.2)};
  text-align: center;
  padding: 40px;
  margin-top: 40px;
  position: relative;
  ${media.lessThan('medium')`
    padding: 32px 0;
    margin-bottom: 40px;
  `}
`;

const PersonalTitle = styled.h5`
  display: flex;
  align-content: center;
  margin: 0;
  padding: 0;
  svg {
    margin-right: 10px;
  }
`;
const HotelCurrency = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
const SoftColor = styled.span`
  color: #8995a0;
`;
const ErrorMessage = styled.div`
  font-size: 14px;
  text-align: center;
  color: red;
  padding: 5px;
`;
export {
  Wrapper,
  Title,
  RoomDetail,
  RoomName,
  PriceDetail,
  BookingDetailSummary,
  CheckIn,
  CheckOut,
  Total,
  UserDetails,
  Avatar,
  Name,
  Lastname,
  Email,
  WrapperCheckout,
  TotalPrice,
  PersonalTitle,
  HotelCurrency,
  SoftColor,
  ErrorMessage
};
