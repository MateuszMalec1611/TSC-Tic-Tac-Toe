import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBox = styled.div``;
export const ButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
`;
export const StyledLink = styled(Link)`
    padding: 8px 15px;
    margin-top: 18px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.blackColor};
    border: 1px solid transparent;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.blackColor};
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s, border 0.3s;

    &:hover {
        background-color: transparent;
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    }
`;

export const Button = styled.button`
    padding: 5px 0;
    margin-top: 26px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.transparentGrayColor};
    border: 1px solid transparent;
    border-radius: 8px;
    box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.blackColor};
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s, border 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.redColor};
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    }
`;
