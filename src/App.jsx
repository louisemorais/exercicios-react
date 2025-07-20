import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sobre from './components/sobre/Sobre';
import PorqueInvestir from './components/porqueInvestir/PorqueInvestir';
import Produto from './components/produtos/Produto';
import Formulario from './components/formulario/Formulario';

function App() {

  return (
    <>
      <div>
        <Header/>
        <Sobre/>
        <PorqueInvestir/>
        <Produto/>
        <Formulario/>
        <Footer/>
      </div>
    </>
  )
}

export default App
