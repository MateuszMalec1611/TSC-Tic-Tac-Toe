import React, { createContext, useEffect, useReducer } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { fetchUserData } from './TicTacToe.services';
import {
    ProviderValue,
    TicTacToeActions,
    TicTacToeActionType,
    TicTacToeState,
} from './TicTacToe.types';

export const TicTacToeContext = createContext({} as ProviderValue);

const initialState: TicTacToeState = {
    loading: { appLoading: false, componentLoading: false },
    error: false,
    errorMessage: '',
    userData: {
        email: '',
        gamesPlayed: 0,
        lostGames: 0,
        wonGames: 0,
    },
};

const reducer = (state: TicTacToeState, action: TicTacToeActions) => {
    switch (action.type) {
        case TicTacToeActionType.GET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                error: false,
            };
        case TicTacToeActionType.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case TicTacToeActionType.ERROR:
            return {
                ...state,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

const TicTacToeProvider: React.FC = ({ children }) => {
    const [ticTacToeState, ticTacToeDispatch] = useReducer(reducer, initialState);
    const { currentUser } = useAuth();
    
    const getUserData = async () => {
        try {
            ticTacToeDispatch({ type: TicTacToeActionType.LOADING, payload: { appLoading: true } });
            const data = await fetchUserData(currentUser.uid);
            
            if (!data) throw new Error('Failed to get user data');
            
            ticTacToeDispatch({ type: TicTacToeActionType.GET_USER_DATA, payload: data });
        } catch (err: any) {
            alert(err.message);
        } finally {
            ticTacToeDispatch({
                type: TicTacToeActionType.LOADING,
                payload: { appLoading: false },
            });
        }
    };
    
    useEffect(() => {
        if (currentUser) getUserData();
    }, [currentUser]);

    return (
        <TicTacToeContext.Provider value={{ ticTacToeState, ticTacToeDispatch }}>
            {children}
        </TicTacToeContext.Provider>
    );
};

export default TicTacToeProvider;
