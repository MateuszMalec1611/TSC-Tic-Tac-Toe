import { useTicTacToe } from 'src/hooks/useTicTacToe';
import { ButtonTypes } from 'src/types/button.types';
import Board from '../Board/Board';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import * as S from './styles';

interface TicTacToeProps {
    cells: string[];
    clickHandler: (index: number) => void;
    resetGameHandler: () => void;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ cells, clickHandler, resetGameHandler }) => {
    const {
        ticTacToeState: {
            loading: { componentLoading },
        },
    } = useTicTacToe();
    return (
        <>
            <S.BoardBox>
                <Board cells={cells!} onClick={clickHandler}></Board>
                <S.ButtonsBox>
                    {componentLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <Button
                                margin="0 10px 0 0"
                                width="190px"
                                typeOf={ButtonTypes.LINK}
                                path="/">
                                back to menu
                            </Button>
                            <Button
                                onClick={resetGameHandler}
                                margin="0 0 0 10px"
                                width="max-content"
                                typeOf={ButtonTypes.BUTTON}>
                                restart
                            </Button>
                        </>
                    )}
                </S.ButtonsBox>
            </S.BoardBox>
        </>
    );
};

export default TicTacToe;
