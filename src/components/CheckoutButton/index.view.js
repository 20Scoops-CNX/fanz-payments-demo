import styled from 'styled-components';
import media from 'styled-media-query';

export const PayloCheckout = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  ${media.lessThan('medium')`
    > img {
      width: 100%;
    }
  `}
`;
