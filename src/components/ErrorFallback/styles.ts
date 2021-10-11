import styled from 'styled-components';

export const ErrorBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
`;
export const ErrorTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.L};
    color: ${({ theme }) => theme.colors.redColor};
`;
export const ErrorDesc = styled.pre`
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontSizes.M};
    white-space: pre-wrap;
`;
