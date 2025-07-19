import './HeaderStyle.css'

function Header(){
    return(<>
    <header>
          <h1>Energia Solar 365</h1>
          <p>Economize com o sol. Invista no seu futuro!</p>
    </header>
                  
    <nav className='navbar'>
        <a href="#sobreNos">sobre</a>
        <a href="#porqueInvestir">Benefícios</a>
        <a href="#produto">produtos</a>
        <a href="#orcamento">contato</a>
    </nav>
    </>)
}

export default Header;