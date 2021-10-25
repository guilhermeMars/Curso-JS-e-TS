// const nome = 'Gui';

// let controle = 0;

// while(controle < nome.length){
//     console.log(nome[controle]);
//     controle++;
// }

function aleatorio(min, max){
    const result = Math.random() * (max - min) + min;
    return Math.floor(result);
}

const min = 1;
const max = 50;
let range = aleatorio(min, max);

while (range !== 10){ // Não sabe exatamente quando vai parar de executar
    range = aleatorio(min, max);
    console.log(range);
}

// Do while - faz e depois checa.

do{
    range = aleatorio(min, max);
    console.log(range);
} while(range !== 10);
