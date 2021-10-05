import { useCallback, useEffect } from 'react';
import Card from 'src/components/Card/Card';
import Loader from 'src/components/Loader/Loader';
import Title from 'src/components/Title/Title';
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

    return (
        <Card>
            <S.Box>
                <Title>ranking</Title>
            </S.Box>
        </Card>
    );
};

export default Ranking;
