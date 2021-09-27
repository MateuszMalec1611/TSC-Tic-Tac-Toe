import { useState } from 'react';
import * as S from './styles';

const Form = () => {
    const [loginFormType, setLoginFormType] = useState(true);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const loginHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setLogin(target.value);

    const passwordHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(target.value);

    const confirmPasswordHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setConfirmPassword(target.value);

    const formTypeHandler = () => setLoginFormType(prev => !prev);

    return (
        <S.FormContainer>
            <S.FormBox>
                <S.Title>{loginFormType ? 'login' : 'register'}</S.Title>
                <S.InputBox>
                    <S.Input onChange={loginHandler} value={login} type="text" />
                    <S.Label>E-mail</S.Label>
                </S.InputBox>
                <S.InputBox>
                    <S.Input onChange={passwordHandler} value={password} type="password" />
                    <S.Label>Password</S.Label>
                </S.InputBox>
                {!loginFormType && (
                    <S.InputBox>
                        <S.Input
                            onChange={confirmPasswordHandler}
                            value={confirmPassword}
                            type="password"
                        />
                        <S.Label>Confirm Password</S.Label>
                    </S.InputBox>
                )}
                <S.ButtonBox registerType={!loginFormType}>
                    <S.Button>{loginFormType ? 'login' : 'register'}</S.Button>
                    <S.Link onClick={formTypeHandler} role="button">
                        {loginFormType ? 'Create an account' : 'Login to an existing account'}
                    </S.Link>
                </S.ButtonBox>
            </S.FormBox>
        </S.FormContainer>
    );
};

export default Form;
