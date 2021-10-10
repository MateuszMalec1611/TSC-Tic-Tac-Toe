import { useHistory } from 'react-router';
import Button from 'src/components/Button/Button';
import Card from 'src/components/Card/Card';
import Title from 'src/components/Title/Title';
import { useTicTacToe } from 'src/hooks/useTicTacToe';
import * as S from './styles';

const Profile = () => {
    const {
        ticTacToeState: { userData },
    } = useTicTacToe();
    const history = useHistory();

    const redirectHandler = (path: string) => history.push(path);

    return (
        <Card>
            <S.ProfileBox>
                <Title>profile</Title>
                <S.DescBox>
                    <S.Email>m.mateusz2000@wp.pl</S.Email>
                    <S.Description>games played: {userData.gamesPlayed}</S.Description>
                    <S.Description>lost games: {userData.lostGames}</S.Description>
                    <S.Description>won games: {userData.wonGames}</S.Description>
                </S.DescBox>
                <Button onClick={() => redirectHandler('/')} margin="20px 0 0 0" width="100%">
                    back to menu
                </Button>
            </S.ProfileBox>
        </Card>
    );
};

export default Profile;
