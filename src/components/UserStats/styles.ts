import styled from 'styled-components';

export const StatsBox = styled.div`
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkerGrayColor};
    border-radius: 5px;
`;
export const DescBox = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Email = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.XL};
`;
export const Desc = styled.p`
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fontSizes.M};
`;
