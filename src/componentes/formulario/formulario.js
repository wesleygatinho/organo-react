import './formulario.css'
import CampoTexto from '../campoTexto/camporTexto';
import ListaSupensa from '../listaSuspensa/listaSuspensa.js';
import Botao from '../botao/botao.js';
import { useState } from 'react';

const Formulario = (propriedades) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        propriedades.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true} label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSupensa
                    obrigatorio={true}
                    label="Time"
                    itens={propriedades.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario;