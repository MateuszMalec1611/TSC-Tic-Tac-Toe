import styled from 'styled-components';

interface Xor0Props {
    Xor0: string;
}

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
