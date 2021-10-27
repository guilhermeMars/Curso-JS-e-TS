// Mais utiilizado para reduzir um array um valor só

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    // Acumulador precisa de algo que o modifique a cada iteração, se não fica como undefined
    acumulador += valor; // Acumulou o valor de todos os campos
    return acumulador; 
}, 0); // 0 - Valor inicial do acumulador, caso não coloque nada, fica com o valor do primeiro elemento
console.log(total);

// Some todos os pares
const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador += valor;
    return acumulador; 
}, 0);
console.log(pares);

// Melhor utilizar o filter
// const total2 = numeros.reduce((acumulador, valor) => {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []); // Acumu
// console.log(total2);


const pessoas = [
    {nome: 'Guilherme', idade: 17},
    {nome: 'Marcos', idade: 34},
    {nome: 'Rodrigo', idade: 22},
    {nome: 'Sueli', idade: 55},
    {nome: 'Marianna', idade: 18},
    {nome: 'Gabi', idade: 78}
];

// Retorne a pessoa mais velha
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
