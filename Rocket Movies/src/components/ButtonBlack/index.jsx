import { Container } from './styles';

export function ButtonBlack({title, loading, ...rest}) {

    return(
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    );
}