import { DocumentData } from '@firebase/firestore';
import * as S from './styles';

interface UserStatsProps {
    stats: DocumentData;
}

const UserStats: React.FC<UserStatsProps> = ({ stats }) => {
    const { email, gamesPlayed, wonGames, lostGames } = stats;
    return (
        <S.StatsBox>
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
