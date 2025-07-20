import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sobre from './components/sobre/Sobre';
import PorqueInvestir from './components/porqueInvestir/PorqueInvestir';

function App() {

  return (
    <>
      <div>
        <Header/>
        <Sobre/>
        <PorqueInvestir/>
        <Footer/>
      </div>
    </>
  )
}

export default App
