import React, { useState } from 'react';
import { useForm } from 'src/hooks/useForm';
import { emialRegex } from 'src/utils/constants';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import useAuthAction from 'src/hooks/useAuthAction';
import { AuthActions } from 'src/store/Auth/Auth.types';
import Loader from '../Loader/Loader';
import AuthTitle from '../AuthTitle/AuthTitle';
import Button from '../Button/Button';
import { ButtonTypes } from 'src/types/buttonTypes';
import * as S from './styles';

const Form = () => {
    const [loginFormType, setLoginFormType] = useState(true);
    const {
        ticTacToeState: {
            loading: { componentLoading },
            error,
            errorMessage,
        },
    } = useTicTacToe();
    const useAction = useAuthAction();

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

        if (loginFormType)
            await useAction(AuthActions.LOGIN, 'Failed to login', '/', email, password);
        if (!loginFormType)
            await useAction(
                AuthActions.SIGNUP,
                'Failed to create an account',
                '/',
                email,
                password
            );
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
        <S.FormBox onSubmit={submitHandler}>
            <AuthTitle>{loginFormType ? 'login' : 'register'}</AuthTitle>
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
            {error && <S.Error block>{errorMessage}</S.Error>}
            {componentLoading ? (
                <Loader />
            ) : (
                <S.ButtonBox registerType={!loginFormType}>
                    <Button
                        margin="0"
                        type="submit"
                        typeOf={ButtonTypes.BUTTON}
                        width="max-content">
                        {loginFormType ? 'login' : 'register'}
                    </Button>
                    <S.LinkBox loginFormType={loginFormType}>
                        <S.Text onClick={formTypeHandler} role="button">
                            {loginFormType ? 'Create an account' : 'Login to an existing account'}
                        </S.Text>
                        {loginFormType && (
                            <S.StyledLink to="/forgot-password">Forgot Password?</S.StyledLink>
                        )}
                    </S.LinkBox>
                </S.ButtonBox>
            )}
        </S.FormBox>
    );
};

export default Form;
