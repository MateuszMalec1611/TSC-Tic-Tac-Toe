import { useEffect, useState } from 'react';
import { useQuery } from 'src/hooks/useQueryParams';
import { calculateWinner } from 'src/utils/helpers';
import { clickHandler } from 'src/utils/helpers';
import TicTacToe from 'src/components/TicTacToe/TicTacToe';
import GameModal from 'src/components/GameModal/GameModal';
import TurnNavigator from 'src/components/TurnNavigator/TurnNavigator';
import * as S from './styles';

const TicTacToe1vs1 = () => {
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

    return (
        <S.Container>
            <TurnNavigator winner={winner} x0={x0} movesLeft={movesLeft} />
            <TicTacToe cells={cells} clickHandler={click} resetGameHandler={resetGameHandler} />
            {modalVisibility && (
                <GameModal winner={winner} gameMode={gameMode} modalHandler={resetGameHandler} />
            )}
        </S.Container>
    );
};

export default TicTacToe1vs1;
