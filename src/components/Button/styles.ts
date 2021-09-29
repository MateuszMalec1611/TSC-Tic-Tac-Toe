import { Link } from 'react-router-dom';
import { device } from 'src/utils/constants';
import styled, { css } from 'styled-components';

interface ButtonsProps {
    width: string;
    margin: string;
}

export const btnStyles = css`
    padding: 6px 15px;
    height: max-content;
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
        padding: 7px 16px;
        font-size: ${({ theme }) => theme.fontSizes.S};
    }
`;

export const StyledBtn = styled.button<ButtonsProps>`
    ${btnStyles}
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
`;

export const StyledLink = styled(Link)<ButtonsProps>`
    ${btnStyles}
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
`;
