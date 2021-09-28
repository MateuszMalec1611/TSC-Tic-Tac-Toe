export type ProviderValue = {
    ticTacToeState: TicTacToeState;
    ticTacToeDispatch: (action: TicTacToeActions) => void;
};

export interface TicTacToeState {
    loading: boolean;
    error: boolean;
    errorMessage: string;
}

export type Loading = {
    type: TicTacToeActionType.LOADING;
    payload: boolean;
};

export type Error = {
    type: TicTacToeActionType.ERROR;
    payload: { error: boolean; errorMessage: string };
};

export type TicTacToeActions = Error | Loading;

export enum TicTacToeActionType {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
}
