import { Link } from 'react-router-dom';
import { device } from 'src/utils/constants';
import styled, { css } from 'styled-components';

interface ButtonsProps {
    width: string;
    margin: string;
}

export const StyledBtn = styled.button<ButtonsProps>`
    padding: 10px 15px;
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    font-size: ${({ theme }) => theme.fontSizes.XS};
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.transparentBlackColor};
    border: 1px solid transparent;
    border-radius: 8px;
    box-shadow: 2px 1px 10px ${({ theme }) => theme.colors.blackColor};
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s, border 0.3s;

    &:hover {
        background-color: transparent;
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    }

    @media ${device.tabletBreakpoint} {
        padding: 12px 16px;
        font-size: ${({ theme }) => theme.fontSizes.S};
    }
`;
