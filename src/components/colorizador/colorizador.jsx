import './colorizador.css'

const Colorizador = ({ color, text }) => {
  return (
    <p 
    className="colorizador" 
    style={{ color: color }}
    >
      {text}
    </p>
  )
}

export default Colorizador