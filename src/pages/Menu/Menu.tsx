import { Link, useHistory } from 'react-router-dom';
import useAuthAction from 'src/hooks/useAuthAction';
import { AuthActions } from 'src/store/Auth/Auth.types';

const Menu = () => {
    const useAction = useAuthAction();

    const logoutHandling = async () =>
        await useAction(AuthActions.LOGOUT, 'Failed to logout!', '/auth');

    return (
        <>
            <h1>Menu</h1>
            <Link to="/">Login or register</Link>
            <button onClick={logoutHandling}>Logout</button>
        </>
    );
};

export default Menu;
