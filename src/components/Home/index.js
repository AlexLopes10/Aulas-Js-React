import react, { useEffect, useState } from "react";



function Home() {
    const [timeSelecionado, setTimeSelecionado] = useState("brasil");
    const [elenco, setElenco] = useState([]);
    const [excercicio2, setExercicio2] = useState('nomes1')
    const [nome,setNome] = useState([])

    const selecoes = {
        brasil: [
            'Alisson', 'Danilo', 'Éder Militão', 'Marquinhos', 'Wendell',
            'Vini Júnior', 'Endrick', 'Rodrygo', 'Bento', 'Willian', 'Estêvão'
        ],
        corinthians: [
            'Hugo Souza', 'Mateuzinho', 'André Ramalho', 'Matheus Bidu', 'Fabrizio Angileri',
            'Rodrigo Garro', 'André Carrillo', 'Yuri Alberto', 'Memphis Depay', 'Ángel Romero', 'Igor Coronado'
        ],
        saoPaulo: [
            'Rafael', 'Alan Franco', 'Oscar', 'Lucas', 'Pablo Maia',
            'Lucas Ferreira', 'Luciano', 'Ferreira', 'Ryan Francisco', 'André Silva', 'Felipe Negrucci'
        ],
        palmeiras: [
            'Weverton', 'Estevão', 'Marcos Rocha', 'Micael', 'Mayke',
            'Murilo', 'Richard Ríos', 'Emiliano Martínez', 'Silva', 'Vitor Roque', 'Paulinho'
        ]
    };

    const nomes = {
        nomes1:['A','B','C','D','E','F','G','H','I','J'],
        nomes2:['1','2','3','4','5','6','7','8','9','10'],
        nomes3:['A-1','B-2','C-3','D-4','E-5','F-6','G-7','H-8','I-9','J-10']
    };
    useEffect(() => {
        setElenco(selecoes[timeSelecionado]);
        setNome(nomes[excercicio2]);

    }, [timeSelecionado,excercicio2]);

    const trocarNomes = () => {
        if (excercicio2 === "nomes1") {
          setExercicio2("nomes2");
        } else if (excercicio2 === "nomes2") {
          setExercicio2("nomes3");
        } else {
          setExercicio2("nomes1");
        }
      };


    return (
        <div>
            <>
            <h1>Exercicio 1</h1>
                {elenco.map((jogador, index) => (
                    <div key={index}>{jogador}</div>
                ))}
                <br />
                <button onClick={() => setTimeSelecionado('corinthians')}>Corinthians</button><br />
                <br />
                <button onClick={() => setTimeSelecionado('saoPaulo')}>São Paulo</button><br />
                <br />
                <button onClick={() => setTimeSelecionado('palmeiras')}>Palmeiras</button><br />
            </>

            <>
                <h1>Excercicio 2</h1>
                {nome.map((Nayara, index) => (
                    <div key={index}>{Nayara}</div>
                ))}
                <br />
                <button onClick={trocarNomes}>Trocar</button>
            </>
        </div>
    );
}



export default Home;