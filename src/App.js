import './App.css';


function App() {

  const aula3 = [
    {
      nome: "fulano 1",
      idade: 29,
      data_nascimento: "10 /05 / 1995",
      nome_mae: "antonia",
      pai: false,
    },
    {
      nome: "fulano 2",
      idade: 34,
      data_nascimento: "20 /04 / 1990",
      nome_mae: "maria",
      pai: true,
      nome_pai: "josé"
    },
    {
      nome: "fulano 3",
      idade: 26,
      data_nascimento: "16 /06 / 1998",
      nome_mae: "maria",
      pai: false
    },
    {
      nome: "fulano 4",
      idade: 30,
      data_nascimento: "02 /04 / 1995",
      nome_mae: "marta",
      pai: true,
      nome_pai: "joão"
    },
    {
      nome: "fulano 5",
      idade: 31,
      data_nascimento: "15 /04 / 1994",
      nome_mae: "ester",
      pai: false
    },

  ]

  return (
    <div classname="App">
      
      {
        aula3.map(item => {
          return (
            <div classname='box'>
              <p>Nome:{item.nome}</p>
              <p>Idade:{item.idade}</p>
              <p>Data de Nascimento:{item.data_nascimento}</p>
              <p>Nome da Mãe:{item.nome_mae}</p>
              {item.pai && <p>nome do pai:{item.nome_pai}</p>}
            </div>
          )
        })
      }

    </div>

  );
}

export default App;
