import { useState } from 'react';
import Board from 'src/components/Board/Board';
import { calculateWinner } from 'src/utils/helper';
import * as S from './styles';

const TicTacToe = () => {
    const [cells, setCells] = useState<string[] | null>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [movesLeft, setMovesLeft] = useState(9);
    const winner = calculateWinner(cells);
    const x0 = xIsNext ? 'X' : 'O';

    const clickHandler = (index: any) => {
        const cellsCopy = [...cells!];

        if (winner || cells![index]) return;

        cellsCopy[index] = x0;
        setCells([...cellsCopy]);
        setXIsNext(!xIsNext);
        setMovesLeft(prevState => prevState - 1);
    };

    const gameInfo = (
        <>
            {!!movesLeft && !winner && <S.InfoText>next move</S.InfoText>}
            {winner && <S.InfoText>win</S.InfoText>}
            {!movesLeft && !winner && <S.InfoText>draw</S.InfoText>}
        </>
    );

    return (
        <S.Container>
            <S.Info>
                <S.X Xor0={!!winner ? winner : x0}>X</S.X>
                {gameInfo}
                <S.O Xor0={!!winner ? winner : x0}>0</S.O>
            </S.Info>
            <S.BoardBox>
                <Board cells={cells!} onClick={clickHandler}></Board>
                <S.ReturnBtn to="/">{'back to menu'}</S.ReturnBtn>
            </S.BoardBox>
        </S.Container>
    );
};

export default TicTacToe;
