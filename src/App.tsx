import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Auth from './pages/Auth/Auth';
import Menu from './pages/Menu/Menu';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import { Container, Wrapper } from './styles';

const App = () => {
    const { currentUser } = useAuth();

    return (
        <Container>
            <Wrapper>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Menu />
                        </Route>
                        {/* <Route exact path="/">
                            {currentUser ? <Menu /> : <Redirect to="/auth" />}
                        </Route> */}
                        <Route path="/auth" component={Auth} />
                        <Route path="/forgot-password" component={ResetPassword} />
                    </Switch>
                </Router>
            </Wrapper>
        </Container>
    );
};

export default App;
