import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import { TicTacToeActionType } from 'src/store/TicTacToe/TicTacToe.types';

const Menu = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const { logout } = useAuth();
    const { ticTacToeDispatch } = useTicTacToe();

    const logoutHandling = async () => {
        try {
            setError('');
            ticTacToeDispatch({ type: TicTacToeActionType.LOADING, payload: true });

            await logout();
            history.push('/');
        } catch (err) {
            setError('Failed to logout');
        } finally {
            ticTacToeDispatch({ type: TicTacToeActionType.LOADING, payload: false });
        }
    };

    return (
        <>
            <h1>Menu</h1>
            <Link to="/">Login or register</Link>
            <button onClick={logoutHandling}>Logout</button>
        </>
    );
};

export default Menu;
