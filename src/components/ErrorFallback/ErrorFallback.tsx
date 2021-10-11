import Button from '../Button/Button';
import * as S from './styles';

interface ErrorFallbackProps {
    error: any;
    resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <S.ErrorBox role="alert">
            <S.ErrorTitle>Something went wrong:</S.ErrorTitle>
            <S.ErrorDesc>{error.message}</S.ErrorDesc>
            <Button onClick={resetErrorBoundary} margin="0" width="300px">
                Try again
            </Button>
        </S.ErrorBox>
    );
};

export default ErrorFallback;
