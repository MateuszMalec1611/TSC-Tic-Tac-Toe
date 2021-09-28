import styled from 'styled-components';
import { device } from 'src/utils/constants';

export const Title = styled.h2`
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSizes.XXXL};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media ${device.tabletBreakpoint} {
        font-size: ${({ theme }) => theme.fontSizes.XXXXL};
    }
`;
