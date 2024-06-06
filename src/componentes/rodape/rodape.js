import './rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            
            <div className='rodape-rodape'>
                <div className='icones'>
                    <img src='/imagens/fb.png' alt='Logo Facebook' />
                    <img src='/imagens/tw.png' alt='Logo Twiter' />
                    <img src='/imagens/ig.png' alt='Logo Instagram' />
                </div>
                <div>
                    <img className='organo' src='/imagens/logo.png' alt='Logo Organo' />
                </div>
                <h2 className='texto'>Desenvolvido por Wesley S.</h2>
            </div>
        </footer>
    )
}

export default Rodape;