import { device } from 'src/utils/constants';
import styled from 'styled-components';

export const Board = styled.div`
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 8px;
    background: ${({ theme }) => theme.colors.whiteColor};
    width: 100%;
    height: 100%;
    max-width: 350px;
    max-height: 350px;

    @media ${device.tabletBreakpoint} {
        max-width: 450px;
        max-height: 450px;
    }
`;
