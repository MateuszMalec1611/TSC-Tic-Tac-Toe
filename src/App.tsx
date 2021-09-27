import Form from './components/Form/Form';
import { AuthProvider } from './store/Auth/Auth.context';
import { Container, Wrapper } from './styles';

const App = () => {
    return (
        <AuthProvider>
            <Container>
                <Wrapper>
                    <Form />
                </Wrapper>
            </Container>
        </AuthProvider>
    );
};

export default App;
