import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from 'src/components/Button/Button';
import Card from 'src/components/Card/Card';
import Loader from 'src/components/Loader/Loader';
import Title from 'src/components/Title/Title';
import UserStats from 'src/components/UserStats/UserStats';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import { fetchUsersData } from 'src/store/TicTacToe/TicTacToe.services';
import { TicTacToeActionType } from 'src/store/TicTacToe/TicTacToe.types';
import * as S from './styles';

const Ranking = () => {
    const {
        ticTacToeDispatch,
        ticTacToeState: {
            loading: { componentLoading },
            usersData,
            error,
            errorMessage,
        },
    } = useTicTacToe();
    const history = useHistory();

    const getUsersData = useCallback(async () => {
        try {
            ticTacToeDispatch({
                type: TicTacToeActionType.LOADING,
                payload: { componentLoading: true },
            });
            const data = await fetchUsersData();
            if (data.length === 0)
                throw new Error('The ranking is empty or the connection could not be established');

            ticTacToeDispatch({ type: TicTacToeActionType.GET_USERS_DATA, payload: data });
        } catch (err: any) {
            ticTacToeDispatch({
                type: TicTacToeActionType.ERROR,
                payload: { error: true, errorMessage: err.message },
            });
        } finally {
            ticTacToeDispatch({
                type: TicTacToeActionType.LOADING,
                payload: { componentLoading: false },
            });
        }
    }, []);

    const redirectHandler = (path: string) => history.push(path);

    useEffect(() => {
        getUsersData();
    }, []);

    const sortedUserStats = usersData.sort((a, b) => {
        const aStats = a.wonGames - a.lostGames;
        const bStats = b.wonGames - b.lostGames;
        return bStats - aStats;
    });
    const usersStats = sortedUserStats.map((stats, index) => (
        <UserStats key={stats.uid} stats={stats} index={index} />
    ));

    return (
        <Card>
            <S.Box>
                <Title>ranking</Title>
                {componentLoading ? (
                    <Loader />
                ) : error ? (
                    <S.InfoText>{errorMessage}</S.InfoText>
                ) : (
                    <S.UsersStatsWrapper>{usersStats}</S.UsersStatsWrapper>
                )}
                <Button onClick={() => redirectHandler('/')} margin="20px 0 0 0" width="190px">
                    back to menu
                </Button>
            </S.Box>
        </Card>
    );
};

export default Ranking;
