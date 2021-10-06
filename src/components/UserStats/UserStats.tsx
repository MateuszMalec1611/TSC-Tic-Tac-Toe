import { DocumentData } from '@firebase/firestore';
import * as S from './styles';

interface UserStatsProps {
    stats: DocumentData;
    index: number;
}

const UserStats: React.FC<UserStatsProps> = ({ stats, index }) => {
    const { email, gamesPlayed, wonGames, lostGames } = stats;
    return (
        <S.StatsBox>
            <S.Position position={index}>{index + 1}</S.Position>
            <S.Email>{email}</S.Email>
            <S.DescBox>
                <S.Desc>
                    Games played: <span>{gamesPlayed}</span>
                </S.Desc>
                <S.Desc>
                    Won games: <span>{wonGames}</span>
                </S.Desc>
                <S.Desc>
                    Lost games: <span>{lostGames}</span>
                </S.Desc>
            </S.DescBox>
        </S.StatsBox>
    );
};

export default UserStats;
