import styled, { keyframes } from 'styled-components';
import { device } from 'src/utils/constants';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Load = styled.div`
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.whiteColor};
    border-bottom: 10px solid ${({ theme }) => theme.colors.whiteColor};
    animation: ${rotate} 1.8s linear infinite;

    @media ${device.tabletBreakpoint} {
        width: 80px;
        height: 80px;
    }
`;
