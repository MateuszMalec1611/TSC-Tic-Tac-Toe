import { useContext } from 'react';
import { TicTacToeContext } from 'src/store/TicTacToe/TicTacToe.context';

export const useTicTacToe = () => {
    return useContext(TicTacToeContext);
};
