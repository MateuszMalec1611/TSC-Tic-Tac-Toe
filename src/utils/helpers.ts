import { GameMode } from 'src/types/gameModes';

export const calculateWinner = (cells: string[]) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
};

export const clickHandler = (
    index: number,
    winner: any,
    cells: string[],
    gameMode: string,
    xIsNext: boolean,
    x0: string
) => {
    if (winner || cells![index] || (!xIsNext && gameMode === GameMode.vsAi)) return;

    const cellsCopy = [...cells!];

    cellsCopy[index] = x0;
    return cellsCopy;
};
