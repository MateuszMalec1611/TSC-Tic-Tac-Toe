import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { useAuth } from './hooks/useAuth';
const Auth = React.lazy(() => import('src/pages/Auth/Auth'));
const ResetPassword = React.lazy(() => import('src/pages/ResetPassword/ResetPassword'));
const Menu = React.lazy(() => import('src/pages/Menu/Menu'));
const TicTacToe = React.lazy(() => import('src/pages/TicTacToe/TicTacToe'));
import { Container, Wrapper } from './styles';

const App = () => {
    const { currentUser } = useAuth();

    return (
        <Container>
            <Wrapper>
                <Router>
                    <Switch>
                        <Suspense fallback={<Loader center={true} />}>
                            <Route exact path="/">
                                {currentUser ? <Menu /> : <Redirect to="/auth" />}
                            </Route>
                            <Route path="/auth" component={Auth} />
                            <Route path="/forgot-password" component={ResetPassword} />
                            <Route path="/ticTacToe">
                                {currentUser ? <TicTacToe /> : <Redirect to="/auth" />}
                            </Route>
                        </Suspense>
                    </Switch>
                </Router>
            </Wrapper>
        </Container>
    );
};

export default App;
