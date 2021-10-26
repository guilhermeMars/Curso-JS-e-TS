// Map - Altera valores do vetor, tem o mesmo tamanho do array original
// Funciona de forma similar ao filter, porém retorna um array com os dados modificados:
// const numerosEmDobro = numeros.map((valor, indice, array) => {
//     console.log(valor, indice, array);
// });

// Dobre os valores
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => {
    return valor*2;
});
console.log(numerosEmDobro);


const pessoas = [
    {nome: 'Guilherme', idade: 17},
    {nome: 'Marcos', idade: 34},
    {nome: 'Rodrigo', idade: 22},
    {nome: 'Sueli', idade: 55},
    {nome: 'Marianna', idade: 18},
    {nome: 'Gabi', idade: 78}
];

// Fiz tudo sozinho :)
const apenasNomes = pessoas.map(valores => valores.nome);
console.log(apenasNomes);

const apenasIdades = pessoas.map(valores => {
    // Tambem funcionaria:
    // delete valores.nome;
    // return valores;
    return {idade: valores.idade};
});

console.log(apenasIdades);

const comId = pessoas.map((valores, indice) =>{
    indice ++; // Para não ter 0
    valores.id = indice; // Mexe no array original, pois é passado por referência
    return valores;
});

const comId2 = pessoas.map((valores, indice) =>{
    const newObj = { ...valores};
    indice ++; 
    newObj.id2 = indice; // Não mexe no array original
    return newObj;
});

console.log(comId);
