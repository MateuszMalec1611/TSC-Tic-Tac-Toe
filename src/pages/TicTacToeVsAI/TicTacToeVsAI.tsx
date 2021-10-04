import { useEffect, useState } from 'react';
import { useQuery } from 'src/hooks/useQueryParams';
import { calculateWinner } from 'src/utils/helpers';
import { clickHandler } from 'src/utils/helpers';
import { useAuth } from 'src/hooks/useAuth';
import TicTacToe from 'src/components/TicTacToe/TicTacToe';
import GameModal from 'src/components/GameModal/GameModal';
import TurnNavigator from 'src/components/TurnNavigator/TurnNavigator';
import { setUserData } from 'src/store/TicTacToe/TicTacToe.services';
import { TicTacToeActionType } from 'src/store/TicTacToe/TicTacToe.types';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import * as S from './styles';

const TicTacToeVsAI = () => {
    const [cells, setCells] = useState<string[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [movesLeft, setMovesLeft] = useState(9);
    const [modalVisibility, setModalVisibility] = useState(false);
    const { currentUser } = useAuth();
    const {
        ticTacToeDispatch,
        ticTacToeState: { userData, error },
    } = useTicTacToe();
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

    const updateUserData = async () => {
        const updatedUserData = {
            gamesPlayed: +userData.gamesPlayed + 1,
            lostGames: +userData.lostGames,
            wonGames: +userData.wonGames,
        };

        if (winner === 'O') updatedUserData.lostGames = +userData.lostGames + 1;
        if (winner === 'X') updatedUserData.wonGames = +userData.wonGames + 1;

        if (!!winner)
            try {
                ticTacToeDispatch({
                    type: TicTacToeActionType.LOADING,
                    payload: { componentLoading: true },
                });

                await setUserData(currentUser.uid, updatedUserData);
                ticTacToeDispatch({
                    type: TicTacToeActionType.UPDATE_USER_DATA,
                    payload: updatedUserData,
                });
                modalHandler(true);
            } catch (err: any) {
                alert(err.message);
            } finally {
                ticTacToeDispatch({
                    type: TicTacToeActionType.LOADING,
                    payload: { componentLoading: false },
                });
            }
    };

    const modalHandler = (show: boolean) => setModalVisibility(show);

    useEffect(() => {
        if (!!winner || !movesLeft) updateUserData();
    }, [movesLeft]);

    useEffect(() => {
        const aiMoveTimeout = setTimeout(() => aiMove(), 500);

        return () => clearTimeout(aiMoveTimeout);
    }, [movesLeft]);
    console.log(userData.gamesPlayed);

    return (
        <S.Container>
            <TurnNavigator winner={winner} x0={x0} movesLeft={movesLeft} />
            <TicTacToe cells={cells} clickHandler={click} resetGameHandler={resetGameHandler} />
            {modalVisibility && (
                <GameModal winner={winner} gameMode={gameMode} modalHandler={modalHandler}>
                    <S.DescriptionBox>
                        <S.DescTitle>games played: {userData.gamesPlayed}</S.DescTitle>
                        <S.Description>lost games: {userData.lostGames}</S.Description>
                        <S.Description>won games: {userData.wonGames}</S.Description>
                    </S.DescriptionBox>
                </GameModal>
            )}
        </S.Container>
    );
};

export default TicTacToeVsAI;
