import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sobre from './components/sobre/Sobre';

function App() {

  return (
    <>
      <div>
        <Header/>
        <Sobre/>

        <section id="porque-investir">
          <h2>Por que investir em Energia Solar?</h2>
        </section>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
