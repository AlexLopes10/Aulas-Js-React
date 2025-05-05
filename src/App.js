import './App.css';
import { Teste, Click } from './components/Utils';


function App() {
  return (
    <form>
      <input onChange={(e) => { Teste(e.target.value,'--é muito Legal--') }} />
      <button onClick={(e) => { Click('Alex','Legal') }}>Enviar</button>
    </form>
  );
}

export default App;
