import Button from 'src/components/Button/Button';
import Card from 'src/components/Card/Card';
import Title from 'src/components/AuthTitle/AuthTitle';
import useAuthAction from 'src/hooks/useAuthAction';
import { AuthActions } from 'src/store/Auth/Auth.types';
import { ButtonTypes } from 'src/types/buttonTypes';
import * as S from './styles';

const Menu = () => {
    const useAction = useAuthAction();

    const logoutHandling = async () =>
        await useAction(AuthActions.LOGOUT, 'Failed to logout!', '/auth');

    return (
        <>
            <Card>
                <S.MenuBox>
                    <Title>Menu</Title>
                    <S.ButtonsBox>
                        <Button
                            margin="26px 0 0 0"
                            width="100%"
                            typeOf={ButtonTypes.LINK}
                            path="/ticTacToe/1vs1?name=1vs1">
                            1 vs 1
                        </Button>
                        <Button
                            margin="26px 0 0 0"
                            width="100%"
                            typeOf={ButtonTypes.LINK}
                            path="/ticTacToe/vsAI?name=vsAI">
                            vs ai
                        </Button>
                        <Button margin="26px 0 0 0" width="100%" typeOf={ButtonTypes.LINK} path="/">
                            ranking
                        </Button>
                        <S.Button onClick={logoutHandling}>Logout</S.Button>
                    </S.ButtonsBox>
                </S.MenuBox>
            </Card>
        </>
    );
};

export default Menu;
