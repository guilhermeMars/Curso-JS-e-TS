// Retorne a soma do dobro de todos os pares
// Filter - filtra os pares
// Map - Dobra os volres
// Reduce - Soma todos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(valor =>{
    if(valor % 2 === 0) return true;
}).map(valor =>{
    return valor*2;
}).reduce((acumulador, valor) =>{
    acumulador += valor;
    return acumulador;
}, 0);
console.log(numerosPares);
