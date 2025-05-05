export const Instrumentos = (valorDigitado) => {
    if (valorDigitado === 'Guitarra') {
        console.log('tem cordas')
    }

    else if (valorDigitado === 'Bateria') {
        console.log('tem pedal')
    }
    else if (valorDigitado === 'Microfone') {
        console.log('Tem fios')
    }
    
    else {
        console.log('não existe esse instrumento')
    }
}

export const Trindade = (digitado) => {
    switch (digitado) {
        case "Deus Pai": console.log('Pai');            break;
        case "Deus Filho": console.log('Jesus Cristo');               break;
        case "Deus Espirito": console.log('Espirito Santo ');              break;
    
        default: console.log('Não faz parte da Trindade')
    }
}