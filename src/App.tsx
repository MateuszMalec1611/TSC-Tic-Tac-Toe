import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Menu from './pages/Menu/Menu';
import { Container, Wrapper } from './styles';

const App = () => {
    return (
        <Container>
            <Wrapper>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Auth} />
                        <Route path="/menu" component={Menu} />
                    </Switch>
                </Router>
            </Wrapper>
        </Container>
    );
};

export default App;
