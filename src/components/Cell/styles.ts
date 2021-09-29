import styled from 'styled-components';

interface CellProps {
    value?: string;
}

export const Cell = styled.button<CellProps>`
    width: calc(100% + 1px);
    height: calc(100% + 1px);
    background: #333;
    border: none;
    font-size: 50px;
    color: ${({ value }) => (value === 'X' ? 'red' : 'green')};
    outline: none;
    cursor: pointer;
`;
