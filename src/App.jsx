import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sobre from './components/sobre/Sobre';
import PorqueInvestir from './components/porqueInvestir/PorqueInvestir';
import Produto from './components/produtos/Produto';

function App() {

  return (
    <>
      <div>
        <Header/>
        <Sobre/>
        <PorqueInvestir/>
        <Produto/>
        <Footer/>
      </div>
    </>
  )
}

export default App
