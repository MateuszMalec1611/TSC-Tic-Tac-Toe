import React, { createContext, useReducer } from 'react';
import {
    ProviderValue,
    TicTacToeActions,
    TicTacToeActionType,
    TicTacToeState,
} from './TicTacToe.types';

export const TicTacToeContext = createContext({} as ProviderValue);

const initialState: TicTacToeState = {
    loading: false,
    error: false,
    errorMessage: '',
};

const reducer = (state: TicTacToeState, action: TicTacToeActions) => {
    switch (action.type) {
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

    return (
        <TicTacToeContext.Provider value={{ ticTacToeState, ticTacToeDispatch }}>
            {children}
        </TicTacToeContext.Provider>
    );
};

export default TicTacToeProvider;
