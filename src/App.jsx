import Colorizador from './components/colorizador/colorizador'
import Button from './components/button/button'

export default function App() {
  return (
    <>
      <Colorizador color="red" text="Desafio 1: este é um texto de exemplo escrito originalmente em letras minúsculas" />
      <br />
      <Button label="Baixar CV" />
    </>
  )
}