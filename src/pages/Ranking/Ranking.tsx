import { useCallback, useEffect } from 'react';
import Button from 'src/components/Button/Button';
import Card from 'src/components/Card/Card';
import Loader from 'src/components/Loader/Loader';
import Title from 'src/components/Title/Title';
import UserStats from 'src/components/UserStats/UserStats';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import { fetchUsersData } from 'src/store/TicTacToe/TicTacToe.services';
import { TicTacToeActionType } from 'src/store/TicTacToe/TicTacToe.types';
import { ButtonTypes } from 'src/types/button.types';
import * as S from './styles';

const Ranking = () => {
    const {
        ticTacToeDispatch,
        ticTacToeState: {
            loading: { componentLoading },
            usersData,
        },
    } = useTicTacToe();

    const getUsersData = useCallback(async () => {
        try {
            ticTacToeDispatch({
                type: TicTacToeActionType.LOADING,
                payload: { componentLoading: true },
            });
            const data = await fetchUsersData();

            ticTacToeDispatch({ type: TicTacToeActionType.GET_USERS_DATA, payload: data });
        } catch (err: any) {
            alert(err.message + 'context');
        } finally {
            ticTacToeDispatch({
                type: TicTacToeActionType.LOADING,
                payload: { componentLoading: false },
            });
        }
    }, []);

    useEffect(() => {
        getUsersData();
    }, []);

    const sortedUserStats = usersData.sort((a, b) => b.wonGames - a.wonGames);
    const usersStats = sortedUserStats.map((stats, index) => (
        <UserStats key={stats.uid} stats={stats} index={index} />
    ));

    return (
        <Card>
            <S.Box>
                <Title>ranking</Title>
                {componentLoading ? (
                    <Loader />
                ) : (
                    <S.UsersStatsWrapper>{usersStats}</S.UsersStatsWrapper>
                )}
                <Button margin="20px 0 0 0" width="190px" typeOf={ButtonTypes.LINK} path="/">
                    back to menu
                </Button>
            </S.Box>
        </Card>
    );
};

export default Ranking;
