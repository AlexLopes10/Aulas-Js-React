import './App.css';


function App() {
  const lista = [
    {
      name: "alex",
      email: "teste@teste.com.br",
      eLegal: true,
      estadoCivil: "casado"
    },
    {
      name: "alex 2",
      email: "maria@teste.com.br",
      eLegal: false,
      estadoCivil: "casado"
    },
    {
      name: "alex 3",
      email: "joao@teste.com.br",
      eLegal: true,
      estadoCivil: "casado"
    },
    {
      name: "alex 4",
      email: "jose@teste.com.br",
      eLegal: false,
      estadoCivil: "casado"
    }
  ]

  const acai = [
    {
      name: "combo 1",
      frutas: ['abacaxi', 'morango', 'uva'],
      cobertura: true
    },
    {
      name: "combo 2",
      frutas: ['banana', 'morango', 'uva'],
      cobertura: true
    },
    {
      name: "combo 3",
      frutas: ['abacaxi', 'morango', 'banana'],
      cobertura: true
    }
  ]

  const filtro = acai.filter(comboLista => {
    return comboLista.frutas.includes('abacaxi')
  })

  const filtrando = lista.filter(itemLista => {
    return itemLista.eLegal === false
  })

  console.log(filtrando, 'filtrando')
  return (
    <div classname="App">

      {
        filtrando.map(itemLista => {
          return (
            <p> {itemLista.name} </p>

          )
        })
      }
      {
        filtro.map(comboLista => {
          return (
            <p key={comboLista.name}> {comboLista.name} </p>
          )
        })
      }

    </div >
  )
}

export default App;
