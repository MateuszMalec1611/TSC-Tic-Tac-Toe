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

export const AuthContext = createContext({} as ProviderValue);

const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
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

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
