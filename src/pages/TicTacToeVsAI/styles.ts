import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'src/utils/constants';

interface Xor0Props {
    Xor0: string;
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;
export const BoardBox = styled.div`
    margin-top: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 350px;

    @media ${device.tabletBreakpoint} {
        margin-top: 60px;
        height: 450px;
    }
`;
export const Info = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const InfoText = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.XXL};
    text-transform: uppercase;
`;
export const O = styled.h3<Xor0Props>`
    font-size: ${({ theme }) => theme.fontSizes.ExtraLarge};
    color: ${({ Xor0, theme }) => (Xor0 === 'X' ? theme.colors.transparentGrayColor : 'green')};
`;
export const X = styled(O)<Xor0Props>`
    color: ${({ Xor0, theme }) => (Xor0 === 'X' ? 'red' : theme.colors.transparentGrayColor)};
`;
export const ButtonsBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);

    @media ${device.mobileBreakpoint} {
        bottom: -110px;
    }
`;
