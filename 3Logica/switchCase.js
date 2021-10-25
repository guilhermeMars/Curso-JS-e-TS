function getDiaSemanaTxt(diaSemana){
    let diaSemanaTxt;
    switch(diaSemana){
    case 0:
        diaSemanaTxt = 'Domingo';
        return diaSemanaTxt;
    case 1:
        diaSemanaTxt = 'Segunda';
        return diaSemanaTxt;
    case 2:
        diaSemanaTxt = 'Terça';
        return diaSemanaTxt;
    case 3:
        diaSemanaTxt = 'Quarta';
        return diaSemanaTxt;
    case 4:
        diaSemanaTxt = 'Quinta ';
        return diaSemanaTxt;
    case 5:
        diaSemanaTxt = 'Sexta';
        return diaSemanaTxt;
    case 6:
        diaSemanaTxt = 'Sábado';
        return diaSemanaTxt;
    default:
        diaSemanaTxt = '';
        return diaSemanaTxt;
    }
}

const data = new Date();
let diaSemana = data.getDay();
const diaSemanaTxt = getDiaSemanaTxt(diaSemana);

console.log(diaSemana, diaSemanaTxt);
// const data = new Date();
// const diaSemana = data.getDay();
// let diaSemanaTxt;

// switch(diaSemana){
// case 0:
//     diaSemanaTxt = 'Domingo';
//     break;
// case 1:
//     diaSemanaTxt = 'Segunda';
//     break;
// case 2:
//     diaSemanaTxt = 'Terça';
//     break;
// case 3:
//     diaSemanaTxt = 'Quarta';
//     break;
// case 4:
//     diaSemanaTxt = 'Quinta ';
//     break;
// case 5:
//     diaSemanaTxt = 'Sexta';
//     break;
// case 6:
//     diaSemanaTxt = 'Sábado';
//     break;
// default:
//     diaSemanaTxt = '';
//     break;
// }

// console.log(diaSemana, diaSemanaTxt);