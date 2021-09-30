import { Load, LoadWrapper } from './styles';

interface LoaderProps {
    center?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ center }) => (
    <LoadWrapper center={center}>
        <Load></Load>
    </LoadWrapper>
);

export default Loader;
