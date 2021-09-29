import React from 'react';
import Cell from 'src/components/Cell/Cell';
import * as S from './styles';

interface BoardProps {
    cells: string[];
    onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ cells, onClick }) => {
    return (
        <S.Board>
            {cells.map((cell: string, index: number) => (
                <Cell key={index} value={cell} onClick={() => onClick(index)} />
            ))}
        </S.Board>
    );
};

export default Board;
