import { useHistory } from 'react-router';
import { AuthActions } from 'src/store/Auth/Auth.types';
import { TicTacToeActionType } from 'src/store/TicTacToe/TicTacToe.types';
import { useAuth } from './useAuth';
import { useTicTacToe } from './useTicTacToe';

const useAuthAction = () => {
    const { ticTacToeDispatch } = useTicTacToe();
    const { login, signup, logout, resetPassword } = useAuth();
    const history = useHistory();

    const useAction = async (
        action: AuthActions,
        errorMess: string,
        path?: string,
        email?: string,
        password?: string
    ) => {
        try {
            ticTacToeDispatch({ type: TicTacToeActionType.LOADING, payload: true });

            switch (action) {
                case AuthActions.LOGIN:
                    await login(email!, password!);
                    break;
                case AuthActions.SIGNUP:
                    await signup(email!, password!);
                    break;
                case AuthActions.LOGOUT:
                    await logout();
                    break;
                case AuthActions.RESET_PASSWORD:
                    await resetPassword(email!);
                    break;
            }
            ticTacToeDispatch({
                type: TicTacToeActionType.ERROR,
                payload: { error: false, errorMessage: '' },
            });
            if (path) history.push(`${path}`);
        } catch (err) {
            ticTacToeDispatch({
                type: TicTacToeActionType.ERROR,
                payload: { error: true, errorMessage: errorMess },
            });
        } finally {
            ticTacToeDispatch({ type: TicTacToeActionType.LOADING, payload: false });
        }
    };
    return useAction;
};

export default useAuthAction;
