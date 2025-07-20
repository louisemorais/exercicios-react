import './CardsStyle.css';

function Card({title,img,alt,description}){
    return(<>
            <article className='bordaProdutos'>
              <img src={img} alt={alt} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
    </>);
}

export default Card;