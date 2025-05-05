import './App.css';
import { Instrumentos, Trindade } from './components/Utils';


function App() {
  return (
    <div>
      <form>
        <label>Instrumentos:</label>
        <input onChange={(e) => { Instrumentos(e.target.value) }} />
        <button>Enviar</button>
      </form>

      <form>
        <label>Trindade:</label>
        <input onChange={(e) => { Trindade(e.target.value) }} />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
