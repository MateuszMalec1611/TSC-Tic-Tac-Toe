import * as S from './styles';

interface TurnNavigatorProps {
    winner: string | null;
    x0: string;
    movesLeft: number;
}

const TurnNavigator: React.FC<TurnNavigatorProps> = ({ winner, x0, movesLeft }) => {
    return (
        <S.Info>
            <S.X Xor0={!!winner ? winner : x0}>X</S.X>
            {!!movesLeft && !winner && <S.InfoText>next move</S.InfoText>}
            <S.O Xor0={!!winner ? winner : x0}>0</S.O>
        </S.Info>
    );
};

export default TurnNavigator;
