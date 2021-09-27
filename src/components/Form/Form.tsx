import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'src/hooks/useForm';
import { useAuth } from 'src/hooks/useAuth';
import { emialRegex } from 'src/utils/constants';
import * as S from './styles';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import { TicTacToeActionType } from 'src/store/TicTacToe/TicTacToe.types';

const Form = () => {
    const history = useHistory();
    const [loginFormType, setLoginFormType] = useState(true);
    const [error, setError] = useState('');
    const { signup, login } = useAuth();
    const {
        ticTacToeState: { loading },
        ticTacToeDispatch,
    } = useTicTacToe();

    const {
        value: email,
        valueHandler: emailHandler,
        isTouchedHanlder: isTouchedEmailHanlder,
        isValid: isValidEmail,
        error: emailError,
    } = useForm(value => emialRegex.test(value));
    const {
        value: password,
        valueHandler: passwordHandler,
        isTouchedHanlder: isTouchedPasswordHanlder,
        isValid: isValidPassword,
        error: passwordError,
    } = useForm(value => value.trim().length >= 6);
    const {
        value: confirmPassword,
        valueHandler: confirmPasswordHandler,
        isTouchedHanlder: isTouchedConfirmPasswordHanlder,
        isValid: isValidConfirmPassword,
        error: confirmPasswordError,
    } = useForm(value => value === password);

    const formTypeHandler = () => setLoginFormType(prev => !prev);

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!checkInputs()) return;

        try {
            setError('');
            ticTacToeDispatch({ type: TicTacToeActionType.LOADING, payload: true });

            if (loginFormType) await login(email, password);
            if (!loginFormType) await signup(email, password);
            history.push('/menu');
        } catch (err) {
            setError(loginFormType ? 'Failed to login' : 'Failed to create an account');
        } finally {
            ticTacToeDispatch({ type: TicTacToeActionType.LOADING, payload: false });
        }
    };

    const checkInputs = () => {
        isTouchedEmailHanlder();
        isTouchedPasswordHanlder();

        if (!loginFormType) {
            isTouchedConfirmPasswordHanlder();
            if (isValidEmail && isValidPassword && isValidConfirmPassword) return true;
        } else if (isValidEmail && isValidPassword) {
            return true;
        }

        return false;
    };

    const emailErrorInfo = emailError && <S.Error>Please enter a valid Email!</S.Error>;
    const passwordErrorInfo = passwordError && (
        <S.Error>Password incorrect (at least 6 characters)</S.Error>
    );
    const confirmPasswordErrorInfo = confirmPasswordError && (
        <S.Error>Passwords do not match</S.Error>
    );

    return (
        <S.FormContainer onSubmit={submitHandler}>
            <S.FormBox>
                <S.Title>{loginFormType ? 'login' : 'register'}</S.Title>
                <S.InputBox>
                    <S.Input
                        onBlur={isTouchedEmailHanlder}
                        onChange={emailHandler}
                        value={email}
                        type="email"
                    />
                    <S.Label>E-mail</S.Label>
                    {emailErrorInfo}
                </S.InputBox>
                <S.InputBox>
                    <S.Input
                        onBlur={isTouchedPasswordHanlder}
                        onChange={passwordHandler}
                        value={password}
                        type="password"
                    />
                    <S.Label>Password</S.Label>
                    {passwordErrorInfo}
                </S.InputBox>
                {!loginFormType && (
                    <S.InputBox>
                        <S.Input
                            onBlur={isTouchedConfirmPasswordHanlder}
                            onChange={confirmPasswordHandler}
                            value={confirmPassword}
                            type="password"
                        />
                        <S.Label>Confirm Password</S.Label>
                        {confirmPasswordErrorInfo}
                    </S.InputBox>
                )}
                {error.length > 0 && <S.Error block>{error}</S.Error>}
                <S.ButtonBox registerType={!loginFormType}>
                    <S.Button type="submit">{loginFormType ? 'login' : 'register'}</S.Button>
                    <S.Link onClick={formTypeHandler} role="button">
                        {loginFormType ? 'Create an account' : 'Login to an existing account'}
                    </S.Link>
                </S.ButtonBox>
            </S.FormBox>
        </S.FormContainer>
    );
};

export default Form;
