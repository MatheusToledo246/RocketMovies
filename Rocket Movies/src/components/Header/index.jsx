import {Container, Profile, Logo, Search } from './styles';
import { Input } from '../../components/Input';

export function Header(){
    return(
        <Container>
            <Logo>
            <img 
                src="../../../src/img/logo.svg" 
                alt="Logo do site" 
            />
            </Logo>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Profile>
            <div>
                <strong>Matheus Toledo</strong>
                <button>
                    Sair
                </button>
            </div>
            <img 
                src="https://github.com/MatheusToledo246.png" 
                alt="Foto do Usuário" 
            />
            </Profile>
            
        </Container>
    )
}