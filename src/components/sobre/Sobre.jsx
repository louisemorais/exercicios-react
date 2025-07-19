import './SobreStyle.css'

function Sobre(){
    return(<>
    <section className='sobreNos' id='sobre-Nos'>
            <div className='sobrenosContent'>
              <h2>sobre nós</h2>
              <img src="./src/assets/placaSolar.png" alt="imagem de telhado" />
              <p>Somos a Energia solar 365, referência em projetos sutentáveis. Instalamos e gerenciamos sistemas residenciais,
                comerciais e rurais com alta eficiência e confiabilidade.
              </p>

                <div className='bordaDados'>
                    <h3>Dados do mercado brasileiro (até 2025)</h3>
                    <ul>
                      <li><strong>Economia na conta de luz:</strong> até 10%</li>
                      <li><strong>Payback médio:</strong> 4 a 6 anos</li>
                      <li><strong>Redução de CO2: </strong>~ 1,5tCO2 por sistema/ano</li>
                      <li><strong>Sistemas Conectados: </strong> mais de 400.000 (fonte: ANEEL, abril/2025)</li>
                    </ul>
                </div>
            </div>
        </section>
    </>)
}
export default Sobre