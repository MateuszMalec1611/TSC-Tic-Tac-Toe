import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Auth from './pages/Auth/Auth';
import Game from './pages/Game/Game';
import Menu from './pages/Menu/Menu';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import { Container, Wrapper } from './styles';

const App = () => {
    const { currentUser } = useAuth();

    return (
        <Container>
            <Wrapper>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            {currentUser ? <Menu /> : <Redirect to="/auth" />}
                        </Route>
                        <Route path="/auth" component={Auth} />
                        <Route path="/forgot-password" component={ResetPassword} />
                        <Route path="/ticTacToe">
                            {currentUser ? <Game /> : <Redirect to="/auth" />}
                        </Route>
                    </Switch>
                </Router>
            </Wrapper>
        </Container>
    );
};

export default App;
