import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    padding: 8px 15px;
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