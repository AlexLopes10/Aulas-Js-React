import './App.css';
import Header from './components/Header';
import Secao from './components/Secao';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Link from './components/Link';

const mostrar = true
const TextoHeader = 'Esse é o Texto Header'
function App() {
  return (
    <div classname="App">
      <header>
        <Header TextoHeader={TextoHeader} />
        <Secao texto={'essa é a seção 1'} />
        <Secao texto={'essa é a seção 2'} />
        <Footer />
      </header>,
      <main>
        <Cards card={'Componentização 1'} />
        <Cards card={'Componentização 2'} />
        <Cards card={'Componentização 3'} />
        <Cards card={'Componentização 4'} />
        <Link mostrar={mostrar} link={"https://www.google.com/"} linkNome={'Google'}/>
        <Link mostrar={mostrar} link={"https://ge.globo.com/"} linkNome={'Globo Sport'} />
      </main>


    </div>

  );
}

export default App;
