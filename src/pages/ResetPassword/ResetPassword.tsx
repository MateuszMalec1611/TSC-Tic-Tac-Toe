import React, { useState } from 'react';
import { useForm } from 'src/hooks/useForm';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import { emialRegex } from 'src/utils/constants';
import Loader from 'src/components/Loader/Loader';
import { Card } from 'src/components/Card/styles';
import useAuthAction from 'src/hooks/useAuthAction';
import { AuthActions } from 'src/store/Auth/Auth.types';
import * as S from 'src/components/Form/styles';
import { Message } from './styles';

const ResetPassword = () => {
    const {
        ticTacToeState: { loading, error, errorMessage },
    } = useTicTacToe();
    const useAction = useAuthAction();
    const [message, setMessage] = useState('');

    const {
        value: email,
        valueHandler: emailHandler,
        isTouchedHanlder: isTouchedEmailHanlder,
        isValid: isValidEmail,
        error: emailError,
    } = useForm(value => emialRegex.test(value));

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        isTouchedEmailHanlder();
        setMessage('');

        if (!isValidEmail) return;

        await useAction(AuthActions.RESET_PASSWORD, 'Failed to reset password', undefined, email);

        setMessage('Check your inbox for further instructions');
    };

    const emailErrorInfo = emailError && <S.Error>Please enter a valid Email!</S.Error>;
    return (
        <Card>
            <S.FormBox onSubmit={submitHandler}>
                <S.Title>password reset</S.Title>
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

                {error && <S.Error block>{errorMessage}</S.Error>}
                {!error && message.length > 0 && <Message>{message}</Message>}
                {loading ? (
                    <Loader />
                ) : (
                    <S.ButtonBox registerType={false}>
                        <S.Button type="submit">reset</S.Button>
                        <S.StyledLink to="/auth">Back to login</S.StyledLink>
                    </S.ButtonBox>
                )}
            </S.FormBox>
        </Card>
    );
};

export default ResetPassword;
