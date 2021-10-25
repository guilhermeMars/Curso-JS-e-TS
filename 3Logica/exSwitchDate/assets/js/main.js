function nomeDia(diaSemana){
    switch(diaSemana){
        case 0:
        return 'Domingo';
        case 1:
        return 'Segunda-feira';
        case 2:
        return 'Terça-feira';
        case 3:
        return 'Quarta-feira';
        case 4:
        return 'Quinta-feira';
        case 5:
        return 'Sexta-feira';
        case 6:
        return 'Sábado';
    }
}

const result = document.querySelector('#resultado');
const data = new Date();
const diaSemana = data.getDay();
const nomeDias = nomeDia(diaSemana);

result.innerHTML = `${nomeDias}, ${diaSemana} de ${data.getMonth()}`;

