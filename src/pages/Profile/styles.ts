import styled from 'styled-components';

export const ProfileBox = styled.div``;
export const DescBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;
export const Email = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.XXL};
    overflow-wrap: anywhere;
    inline-size: 100%;
`;
export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.XL};
`;
