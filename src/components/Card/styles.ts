import styled from 'styled-components';

export const Card = styled.div`
    padding: 20px;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    background-color: ${({ theme }) => theme.colors.lightGrayColor};
    border-radius: 4px;
    box-shadow: 3px 3px 14px black;
`;