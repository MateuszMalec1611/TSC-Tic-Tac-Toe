import { useEffect, useState } from 'react';
import { useQuery } from 'src/hooks/useQueryParams';
import { calculateWinner } from 'src/utils/helpers';
import { GameMode } from 'src/types/gameModes';
import Board from 'src/components/Board/Board';
import Button from 'src/components/Button/Button';
import { ButtonTypes } from 'src/types/buttonTypes';
import * as S from './styles';

const TicTacToe = () => {
    const [cells, setCells] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [movesLeft, setMovesLeft] = useState(9);
    const query = useQuery();

    const winner = calculateWinner(cells);
    const x0 = xIsNext ? 'X' : 'O';
    const gameMode = query.get('name');

    const clickHandler = (index: number) => {
        if (winner || cells![index] || (!xIsNext && gameMode === GameMode.vsAi)) return;

        const cellsCopy = [...cells!];

        cellsCopy[index] = x0;
        moveHandler(cellsCopy);
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

    if (gameMode === GameMode.vsAi) {
        useEffect(() => {
            const aiMoveTimeout = setTimeout(() => aiMove(), 500);

            return () => clearTimeout(aiMoveTimeout);
        }, [movesLeft]);
    }

    const gameInfo = (
        <>
            {!!movesLeft && !winner && <S.InfoText>next move</S.InfoText>}
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
            <S.BoardBox>
                <Board cells={cells!} onClick={clickHandler}></Board>
                <S.ButtonsBox>
                    <Button margin="0 10px 0 0" width="190px" typeOf={ButtonTypes.LINK} path="/">
                        back to menu
                    </Button>
                    <Button margin="0 0 0 10px" width="max-content" typeOf={ButtonTypes.BUTTON}>
                        restart
                    </Button>
                </S.ButtonsBox>
            </S.BoardBox>
        </S.Container>
    );
};

export default TicTacToe;
