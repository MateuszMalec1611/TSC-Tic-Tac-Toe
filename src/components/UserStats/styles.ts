import styled from 'styled-components';

interface PositionProps {
    position: number;
}

export const StatsBox = styled.div`
    margin-bottom: 10px;
    padding: 10px 0 25px 0;
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
export const Position = styled.h2<PositionProps>`
    font-size: ${({ theme }) => theme.fontSizes.XXXXL};
    color: ${({ position, theme }) => (position === 0 ? 'gold' : theme.colors.fontColor)};
`;
export const Email = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.XL};
    text-align: center;
    overflow-wrap: break-word;
    inline-size: 100%;
`;
export const Desc = styled.p`
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fontSizes.M};
`;
