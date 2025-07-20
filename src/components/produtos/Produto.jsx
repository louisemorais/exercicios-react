import './ProdutosStyle.css';
import Card from './CardsProduto';

function Produto (){
    return(<>
        <section className='produtos' id='produto'>
          <div className='produtosContent'>
            <h2>Nossos Produtos</h2>
            <div className='containerCard'>
                <Card title='Placa Solar 400 W' img='src/assets/placa400w.png' alt='placa solar'
                 description= 'Alta eficiência para uso residencial e comercial'/>
                <Card title='Kit Solar completo' img='src/assets/kitSolar.png' alt='kit de luz solar'
                 description='Inclui placas, inversor,estrutura, cabos e instalação profissional'/>
                <Card title='Inversor Solar' img='src/assets/inversorSolar.png' alt='inversor solar' description='Transforma energia solar em energia elétrica para a sua casa'/>
            </div>
          </div>
        </section>
    </>)
}

export default Produto;