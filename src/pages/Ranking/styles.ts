import { device } from 'src/utils/constants';
import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const UsersStatsWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 100%;
    overflow-y: scroll;
    list-style: none;

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
