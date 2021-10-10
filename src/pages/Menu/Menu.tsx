import { useHistory } from 'react-router';
import Button from 'src/components/Button/Button';
import Card from 'src/components/Card/Card';
import Title from 'src/components/Title/Title';
import useAuthAction from 'src/hooks/useAuthAction';
import { AuthActions } from 'src/store/Auth/Auth.types';
import * as S from './styles';

const Menu = () => {
    const useAction = useAuthAction();
    const history = useHistory();

    const logoutHandling = async () =>
        await useAction(AuthActions.LOGOUT, 'Failed to logout!', '/auth');

    const redirectHandler = (path: string) => history.push(path);

    return (
        <>
            <Card>
                <S.MenuBox>
                    <Title>Menu</Title>
                    <S.ButtonsBox>
                        <Button
                            onClick={() => redirectHandler('/ticTacToe/1vs1?name=1vs1')}
                            margin="26px 0 0 0"
                            width="100%">
                            1 vs 1
                        </Button>
                        <Button
                            onClick={() => redirectHandler('/ticTacToe/vsAI?name=vsAI')}
                            margin="26px 0 0 0"
                            width="100%">
                            vs ai
                        </Button>
                        <Button
                            onClick={() => redirectHandler('/ranking')}
                            margin="26px 0 0 0"
                            width="100%">
                            ranking
                        </Button>
                        <Button
                            onClick={() => redirectHandler('/profile')}
                            margin="26px 0 0 0"
                            width="100%">
                            profile
                        </Button>
                        <S.Button onClick={logoutHandling}>Logout</S.Button>
                    </S.ButtonsBox>
                </S.MenuBox>
            </Card>
        </>
    );
};

export default Menu;
