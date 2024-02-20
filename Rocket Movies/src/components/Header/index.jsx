import {Container, Profile, Logo } from './styles';

export function Header(){
    return(
        <Container>
            <Logo>
            <img 
                src="../../../src/img/logo.svg" 
                alt="Logo do site" 
            />
            </Logo>

            <Profile>
            <img 
                src="https://github.com/MatheusToledo246.png" 
                alt="Foto do Usuário" 
            />

            <div>
                <strong>Matheus Toledo</strong>
                <button>
                    Sair
                </button>
            </div>
            </Profile>
            
        </Container>
    )
}