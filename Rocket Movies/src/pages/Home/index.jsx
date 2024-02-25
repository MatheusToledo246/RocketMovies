import {Container, Search, Brand, Content, NewNote} from './styles'
import { Header } from '../../components/Header';
import {FiPlus} from 'react-icons/fi'

export function Home() {
    return(
        <Container>        
            <Header />

            <Brand>
                <h1>Meus filmes</h1>
                <NewNote>
                    <FiPlus />
                    <p>Adicinar filme</p>
                </NewNote>
            </Brand>
               
            <Search>

            </Search>

            <Content>

            </Content>
            <Content>

            </Content>
            <Content>

            </Content>

           
            </Container>
    )
}