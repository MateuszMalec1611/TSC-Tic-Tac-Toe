import React from 'react';
import { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    User,
} from '@firebase/auth';
import { auth } from 'src/firebase';
import { ProviderValue } from './Auth.types';

export const AuthContext = createContext({} as ProviderValue);

const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
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

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
