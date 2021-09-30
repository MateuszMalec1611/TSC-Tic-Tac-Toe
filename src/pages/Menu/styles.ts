import styled from 'styled-components';

export const MenuBox = styled.div``;
export const ButtonsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
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
