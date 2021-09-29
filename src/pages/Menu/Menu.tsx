import Card from 'src/components/Card/Card';
import Title from 'src/components/Title/Title';
import useAuthAction from 'src/hooks/useAuthAction';
import { AuthActions } from 'src/store/Auth/Auth.types';
import { StyledLink } from 'src/styles/global';
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
                        <StyledLink to="/ticTacToe">1 vs 1</StyledLink>
                        <StyledLink to="/">vs ai</StyledLink>
                        <StyledLink to="/">ranking</StyledLink>
                        <S.Button onClick={logoutHandling}>Logout</S.Button>
                    </S.ButtonsBox>
                </S.MenuBox>
            </Card>
        </>
    );
};

export default Menu;
