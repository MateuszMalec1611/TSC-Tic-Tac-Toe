export type ProviderValue = {
    ticTacToeState: TicTacToeState;
    ticTacToeDispatch: (action: TicTacToeActions) => void;
};

export interface TicTacToeState {
    loading: boolean;
    error: boolean;
}

export type Loading = {
    type: TicTacToeActionType.LOADING;
    payload: boolean;
};

export type Error = {
    type: TicTacToeActionType.ERROR;
    payload: boolean;
};

export type TicTacToeActions = Error | Loading;

export enum TicTacToeActionType {
    LOADING,
    ERROR,
}
