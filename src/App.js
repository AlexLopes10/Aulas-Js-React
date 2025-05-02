import './App.css';
import { useState } from 'react';



function App() {
  const [valor, setValor] = useState('');
  const mensagem = "Você conseguiu de uma Variavel"

  function aoMudar(e) {
    setValor(e.target.value);
  }

  function aoEnviar() {
    alert("Resultado: " + (Number(valor) + 4));
  }

  function mostrarMensagem() {
    alert(mensagem);
  }

  return (
    <div className="App">
      <form>
        <label>Digite um número:</label>
        <input type="number" onChange={aoMudar} />
        <button type="button" onClick={aoEnviar}>Enviar</button>
      </form>
      <div onClick={mostrarMensagem}>
        <h1>Click aqui</h1>
      </div>
    </div>
  );
}

export default App;
