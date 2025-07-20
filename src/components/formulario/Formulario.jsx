import './FormularioStyle.css';

function Formulario(){
    return(<>
        <section className='formulario' id='orcamento'>
            <div className='form-content'>
              <h2>Solicite seu orçamento</h2>
                <form>
                    <div className='container-form'>
                        <input type="text" placeholder='Seu nome'/>
                        <input type="email" placeholder='seu email' />
                        <textarea name="descricao" id="descricao" placeholder="Descreva seu projeto (área, localização...)" ></textarea>
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    </>);
}

export default Formulario;