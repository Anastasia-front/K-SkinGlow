import { styled } from 'styled-components';

import { device, flexCenter } from 'src/styles';
import { WrapperProps } from './types';



export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin: 0 auto;
  ${flexCenter};
  flex-direction: ${({ $direction }) => $direction || 'column'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: ${({ $alignItems }) => $alignItems || 'center'};

  row-gap: 80px;

  @media ${device.mobile} {
    padding: 0 10px;
  }

  @media ${device.tablet} {
    padding: 0 30px;
  }
  @media ${device.laptop} {
    padding: 0 60px;
  }

  @media ${device.pc} {
    padding: 0 80px;
    max-width: 1440px;
  }
`;
