import { ButtonTypes } from 'src/types/buttonTypes';
import { GameMode } from 'src/types/gameModes';
import Button from '../Button/Button';
import * as S from './styles';

interface GameModalProps {
    winner: string | null;
    gameMode: string;
    modalHandler: (show: boolean) => void;
}

const GameModal: React.FC<GameModalProps> = ({ children, winner, gameMode, modalHandler }) => {
    const firstGameModeHeader = <S.Header>{!!winner ? `"${winner}" won` : 'draw'}</S.Header>;
    const vsAIModeHeader = <S.Header>{winner === 'X' ? `you won` : 'you lose'}</S.Header>;

    return (
        <>
            <S.BackDrop onClick={() => modalHandler(false)} />
            <S.ModalWrapper>
                {gameMode === GameMode['1vs1'] ? firstGameModeHeader : vsAIModeHeader}
                {children}
                <Button
                    onClick={() => modalHandler(false)}
                    margin="28px 0"
                    width="max-content"
                    typeOf={ButtonTypes.BUTTON}>
                    close
                </Button>
            </S.ModalWrapper>
        </>
    );
};

export default GameModal;
