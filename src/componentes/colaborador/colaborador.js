import './colaborador.css'

const Colaborador = (propriedades) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={propriedades.imagem} alt={propriedades.nome}/>
            </div>
            <div className='rodape'>
                <h4>{propriedades.nome}</h4>
                <h5>{propriedades.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;