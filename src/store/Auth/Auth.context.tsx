import React from 'react';
import { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    User,
} from '@firebase/auth';
import { auth, database } from 'src/firebase';
import { ProviderValue } from './Auth.types';
import { doc, setDoc } from '@firebase/firestore';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import { TicTacToeActionType } from '../TicTacToe/TicTacToe.types';

export const AuthContext = createContext({} as ProviderValue);

const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>();
    const {
        ticTacToeState: {
            loading: { appLoading },
        },
        ticTacToeDispatch,
    } = useTicTacToe();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            ticTacToeDispatch({
                type: TicTacToeActionType.LOADING,
                payload: { appLoading: false },
            });
        });

        return unsubscribe;
    }, []);

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            const user = userCredential.user;
            setDoc(doc(database, 'users', user.uid), {
                email: user.email,
            });
            setDoc(doc(database, 'ranking', user.uid), {
                email: user.email,
                gamesPlayed: 0,
                wonGames: 0,
                lostGames: 0,
            });
        });
    };

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    const resetPassword = (emial: string) => sendPasswordResetEmail(auth, emial);

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
    };

    return <AuthContext.Provider value={value}>{!appLoading && children}</AuthContext.Provider>;
};

export default AuthProvider;
