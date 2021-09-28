import styled from 'styled-components';

export const Message = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.M};
    color: ${({ theme }) => theme.colors.greenColor};
    text-align: center;
`;
