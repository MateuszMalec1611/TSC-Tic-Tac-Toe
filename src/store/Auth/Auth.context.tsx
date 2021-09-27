import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, User } from '@firebase/auth';
import { auth } from 'src/firebase';
import { ProviderValue } from './Auth.types';

export const AuthContext = createContext({} as ProviderValue);

export const AuthProvider: React.FC = ({ children }) => {
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

    const value = {
        currentUser,
        signup,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
