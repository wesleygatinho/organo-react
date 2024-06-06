import './botao.css'

const Botao = (propriedades) => {
    return (
        <button className='botao'>
            {propriedades.texto}
        </button>
    )
}

export default Botao;