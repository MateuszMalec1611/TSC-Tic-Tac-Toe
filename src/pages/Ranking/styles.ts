import styled from 'styled-components';
import { show } from 'src/shared/animations';
import { device } from 'src/utils/constants';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 400px;
    width: 100%;

    @media ${device.tabletBreakpoint} {
        min-height: 470px;
    }
`;
export const UsersStatsWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 100%;
    list-style: none;
    overflow-y: scroll;
    animation: ${show} 0.5s ease-in;

    &::-webkit-scrollbar {
        height: 4px;
        background-color: #474747;
        border-radius: 10px;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
    }

    @media ${device.tabletBreakpoint} {
        height: 300px;
    }
`;

export const InfoText = styled.p`
    color: ${({ theme }) => theme.colors.redColor};
    text-align: center;
`;
