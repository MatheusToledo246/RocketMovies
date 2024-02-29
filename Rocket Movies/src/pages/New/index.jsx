import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components//NoteItem';
import { ButtonBlack } from '../../components/ButtonBlack';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { Container, Form } from './styles';
import { FiArrowLeft } from 'react-icons/fi';

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                <a href="/">
                    <FiArrowLeft />
                    Voltar
                     </a>
                  
                 <h1>Novo filme</h1>
                  

                    <div className='inputs'>
                    <Input placeholder="Titulo" />
                    <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    <Textarea placeholder="Observações" />

                    <h2>Marcadores</h2>
                    <div className="tags" >
                        <NoteItem value="React" />
                        <NoteItem value="Novo marcador" isNew />
                    </div>    
                    
                    <div className='buttons'>
                        <ButtonBlack  title="Excluir filme" />
                        <Button title= "Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    );
}