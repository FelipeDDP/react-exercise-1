const Button = ({ label }) => {
    function handleAlert() {
        window.alert('A label desse botão é ' + label)
    }

    return (
        <button onClick={handleAlert}>Desafio 2</button>
    )
}

export default Button