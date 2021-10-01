import { useEffect, useState } from 'react';
import { useQuery } from 'src/hooks/useQueryParams';
import { calculateWinner } from 'src/utils/helpers';
import { clickHandler } from 'src/utils/helpers';
import TicTacToe from 'src/components/TicTacToe/TicTacToe';
import GameModal from 'src/components/GameModal/GameModal';
import TurnNavigator from 'src/components/TurnNavigator/TurnNavigator';
import * as S from './styles';

const TicTacToeVsAI = () => {
    const [cells, setCells] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [movesLeft, setMovesLeft] = useState(9);
    const [modalVisibility, setModalVisibility] = useState(false);
    const query = useQuery();

    const winner = calculateWinner(cells);
    const x0 = xIsNext ? 'X' : 'O';
    const gameMode = query.get('name')!;

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

    const modalHandler = (show: boolean) => setModalVisibility(show);

    useEffect(() => {
        if (!!winner || !movesLeft) modalHandler(true);
    }, [movesLeft]);

    useEffect(() => {
        const aiMoveTimeout = setTimeout(() => aiMove(), 500);

        return () => clearTimeout(aiMoveTimeout);
    }, [movesLeft]);

    return (
        <S.Container>
            <TurnNavigator winner={winner} x0={x0} movesLeft={movesLeft} />
            <TicTacToe cells={cells} clickHandler={click} resetGameHandler={resetGameHandler} />
            {modalVisibility && (
                <GameModal winner={winner} gameMode={gameMode} modalHandler={modalHandler}>
                    <S.DescriptionBox>
                        <S.DescTitle>games played: 2</S.DescTitle>
                        <S.Description>won games: 10</S.Description>
                        <S.Description>lost games: 2</S.Description>
                    </S.DescriptionBox>
                </GameModal>
            )}
        </S.Container>
    );
};

export default TicTacToeVsAI;
