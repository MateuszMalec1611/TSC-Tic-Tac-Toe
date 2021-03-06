import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useTicTacToe } from './hooks/useTicTacToe';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import Loader from './components/Loader/Loader';
const Auth = React.lazy(() => import('src/pages/Auth/Auth'));
const ResetPassword = React.lazy(() => import('src/pages/ResetPassword/ResetPassword'));
const Menu = React.lazy(() => import('src/pages/Menu/Menu'));
const TicTacToe1vs1 = React.lazy(() => import('src/pages/TicTacToe1vs1/TicTacToe1vs1'));
const TicTacToeVsAI = React.lazy(() => import('src/pages/TicTacToeVsAI/TicTacToeVsAI'));
const Ranking = React.lazy(() => import('src/pages/Ranking/Ranking'));
const Profile = React.lazy(() => import('src/pages/Profile/Profile'));
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
                <AnimatePresence>
                    {appLoading ? (
                        <Loader center={true} />
                    ) : (
                        <ErrorBoundary
                            FallbackComponent={ErrorFallback}
                            onReset={() => window.location.reload()}>
                            <Suspense fallback={<Loader center={true} />}>
                                <Switch>
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
                                    <Route path="/profile">
                                        {currentUser ? <Profile /> : <Redirect to="/auth" />}
                                    </Route>
                                </Switch>
                            </Suspense>
                        </ErrorBoundary>
                    )}
                </AnimatePresence>
            </Wrapper>
        </Container>
    );
};

export default App;
