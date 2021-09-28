import Card from 'src/components/Card/Card';
import Title from 'src/components/Title/Title';
import useAuthAction from 'src/hooks/useAuthAction';
import { AuthActions } from 'src/store/Auth/Auth.types';
import * as S from './styles';

const Menu = () => {
    const useAction = useAuthAction();

    const logoutHandling = async () =>
        await useAction(AuthActions.LOGOUT, 'Failed to logout!', '/auth');

    return (
        <>
            {/* <Link to="/">Login or register</Link> */}
            <Card>
                <S.MenuBox>
                    <Title>Menu</Title>
                    <S.ButtonsBox>
                        <S.StyledLink to="/">1 vs 1</S.StyledLink>
                        <S.StyledLink to="/">vs ai</S.StyledLink>
                        <S.StyledLink to="/">ranking</S.StyledLink>
                        <S.Button onClick={logoutHandling}>Logout</S.Button>
                    </S.ButtonsBox>
                </S.MenuBox>
            </Card>
        </>
    );
};

export default Menu;
