import { DocumentData } from '@firebase/firestore';

export type ProviderValue = {
    ticTacToeState: TicTacToeState;
    ticTacToeDispatch: (action: TicTacToeActions) => void;
};

export interface TicTacToeState {
    loading: boolean;
    error: boolean;
    errorMessage: string;
    userData: DocumentData;
}

export type GetUserData = {
    type: TicTacToeActionType.GET_USER_DATA;
    payload: DocumentData;
};
export type Loading = {
    type: TicTacToeActionType.LOADING;
    payload: boolean;
};
    
export type Error = {
    type: TicTacToeActionType.ERROR;
    payload: { error: boolean; errorMessage: string };
};

export type TicTacToeActions = GetUserData | Error | Loading;

export enum TicTacToeActionType {
    GET_USER_DATA = 'GET_USER_DATA',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
}
