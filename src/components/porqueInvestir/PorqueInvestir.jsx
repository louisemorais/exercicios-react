import './PorqueInvestirStyle.css';
import CardsInvestir from './CardsInvestir.jsx';

function PorqueInvestir({title, description}){
    return(<>
    <section id='porque-investir' className='porqueInvestir'>
        <div className='porqueInvestir-content'>
            <h2>Por que investir em Energia Solar?</h2>
            <div className='organizandoCards'>
                <CardsInvestir title='Redução da Conta' description='Economize até 90% na conta de energia elétrica'/>
                <CardsInvestir title='Sustentabilidade' description='Energia limpa e renovável, ajudando o planeta'/>
                <CardsInvestir title='Valorização do Imóvel' description='Residências com placas solares aumentam até 10% no valor de mercado'/>
                <CardsInvestir title='Retorno garantido' description='Payback em até 4-6 anos e economiam mensal garantida'/>
            </div>
        </div>
    </section>
    </>)
}

export default PorqueInvestir;