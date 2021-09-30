import { ButtonTypes } from 'src/types/buttonTypes';
import Button from '../Button/Button';
import * as S from './styles';

interface ModalProps {
    winner: string | null;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ winner, closeModal }) => {
    return (
        <>
            <S.BackDrop />
            <S.Modal>
                <S.Header>{!!winner ? `"${winner}" won` : 'draw'}</S.Header>
                <Button
                    onClick={closeModal}
                    margin="28px 0"
                    width="max-content"
                    typeOf={ButtonTypes.BUTTON}>
                    close
                </Button>
            </S.Modal>
        </>
    );
};

export default Modal;
