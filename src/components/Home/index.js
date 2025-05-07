import react, { useState } from "react";



function Home() {
    //useState
    const [teste, setTeste] = useState('1');
    const [teste2, setTeste2] = useState('Amo');
    const [teste3, setTeste3] = useState('Cachorro');
    

    return (
        <div>
            <>
                <h1>Exercicio 1</h1>
                <h2>Eu {teste2} o {teste3}</h2>
                <button onClick={()=> {
                    setTeste2('odeio'); 
                    setTeste3('Gato')
                }}>Trocar</button>
            </>

            <>
                <h1>Exercicio 2</h1>
                <h1>{teste}</h1>
                <button onClick={() => setTeste(teste * 4)}>valor x 4</button>
            </>
        </div>
    );
}



export default Home;