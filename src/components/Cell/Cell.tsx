import React from 'react';
import * as S from './styles';

interface CellProps {
    value: string;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {

    return <S.Cell value={value} onClick={onClick}>{value}</S.Cell>;
};

export default Cell;
