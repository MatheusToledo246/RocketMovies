import { Container } from './styles';

import { Button } from '../../components/Button';

export function Details() {
  return(
    <Container>
      <h1>Para de dar erro</h1>
      <span>Matheus Toledo</span>

      <Button title="Cadastras"/>
      <Button title="logar"/>
      <Button title="voltar" />
    </Container>
  )
}