import {Container, Profile} from './styles';

export function Header(){
    return(
        <Container>
            <Profile>
            <img 
                src="https://github.com/MatheusToledo246.png" 
                alt="Foto do Usuário" 
            />

            <div>
                <strong>Matheus Toledo</strong>
                <span>Sair</span>
            </div>
            </Profile>
        </Container>
    )
}