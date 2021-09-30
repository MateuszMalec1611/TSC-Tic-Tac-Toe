import { useEffect, useState } from 'react';
import { useQuery } from 'src/hooks/useQueryParams';
import { calculateWinner } from 'src/utils/helpers';
import { clickHandler } from 'src/utils/helpers';
import * as S from './styles';
import TicTacToe from 'src/components/TicTacToe/TicTacToe';

const TicTacToeVsAI = () => {
    const [cells, setCells] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [movesLeft, setMovesLeft] = useState(9);
    const query = useQuery();

    const winner = calculateWinner(cells);
    const x0 = xIsNext ? 'X' : 'O';
    const gameMode = query.get('name');

    const click = (index: number) => {
        const cellsCopy = clickHandler(index, winner, cells, gameMode!, xIsNext, x0);
        if (!!cellsCopy) moveHandler(cellsCopy!);
    };

    const aiMove = () => {
        if (!xIsNext && !winner && movesLeft !== 0) {
            const cellsCopy = [...cells!];
            let shuffleUnique = true;

            while (shuffleUnique) {
                let randomNumber = Math.floor(Math.random() * 9);

                if (!cells![randomNumber]) {
                    shuffleUnique = false;
                    cellsCopy[randomNumber] = x0;
                }
            }
            moveHandler(cellsCopy);
        }
    };

    const moveHandler = (cellsCopy: string[]) => {
        setCells([...cellsCopy]);
        setXIsNext(!xIsNext);
        setMovesLeft(prevState => prevState - 1);
    };

    const resetGameHandler = () => {
        setCells(Array(9).fill(null));
        setXIsNext(true);
        setMovesLeft(9);
    };

    useEffect(() => {
        const aiMoveTimeout = setTimeout(() => aiMove(), 500);

        return () => clearTimeout(aiMoveTimeout);
    }, [movesLeft]);

    const gameInfo = (
        <>
            {!!movesLeft && !winner && <S.InfoText>next move ai</S.InfoText>}
            {winner && <S.InfoText>won</S.InfoText>}
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
            <TicTacToe cells={cells} clickHandler={click} resetGameHandler={resetGameHandler} />
        </S.Container>
    );
};

export default TicTacToeVsAI;
