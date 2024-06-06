import Colaborador from '../colaborador/colaborador';
import './time.css'

const Time = (propriedades) => {
    return (
        (propriedades.colaboradores.length > 0) && 
        <section className='time' style={{ backgroundColor: propriedades.corSecundaria }}>
            <h3 style={{ borderColor: propriedades.corPrimaria }}>{propriedades.nome}</h3>
            <div className='colaboradores'>
                {propriedades.colaboradores.map(colaborador => <Colaborador
                    corDeFundo={propriedades.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time;