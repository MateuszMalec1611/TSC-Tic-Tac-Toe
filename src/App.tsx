import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { useAuth } from './hooks/useAuth';
import { useTicTacToe } from './hooks/useTicTacToe';
const Auth = React.lazy(() => import('src/pages/Auth/Auth'));
const ResetPassword = React.lazy(() => import('src/pages/ResetPassword/ResetPassword'));
const Menu = React.lazy(() => import('src/pages/Menu/Menu'));
const TicTacToe1vs1 = React.lazy(() => import('src/pages/TicTacToe1vs1/TicTacToe1vs1'));
const TicTacToeVsAI = React.lazy(() => import('src/pages/TicTacToeVsAI/TicTacToeVsAI'));
const Ranking = React.lazy(() => import('src/pages/Ranking/Ranking'));
import { Container, Wrapper } from './styles';

const App = () => {
    const { currentUser } = useAuth();
    const {
        ticTacToeState: {
            loading: { appLoading },
        },
    } = useTicTacToe();

    return (
        <Container>
            <Wrapper>
                <Router>
                    <Switch>
                        {appLoading ? (
                            <Loader center={true} />
                        ) : (
                            <Suspense fallback={<Loader center={true} />}>
                                <Route exact path="/">
                                    {currentUser ? <Menu /> : <Redirect to="/auth" />}
                                </Route>
                                <Route path="/auth" component={Auth} />
                                <Route path="/forgot-password" component={ResetPassword} />
                                <Route path="/ticTacToe/1vs1">
                                    {currentUser ? <TicTacToe1vs1 /> : <Redirect to="/auth" />}
                                </Route>
                                <Route path="/ticTacToe/vsAI">
                                    {currentUser ? <TicTacToeVsAI /> : <Redirect to="/auth" />}
                                </Route>
                                <Route path="/ranking">
                                    {currentUser ? <Ranking /> : <Redirect to="/auth" />}
                                </Route>
                            </Suspense>
                        )}
                    </Switch>
                </Router>
            </Wrapper>
        </Container>
    );
};

export default App;
