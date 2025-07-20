import './InvestirCard.css';

function CardsInvestir({title, description}){
    return(<>
        <article className='porqueinvestir-item'>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    </>)
}

export default CardsInvestir;