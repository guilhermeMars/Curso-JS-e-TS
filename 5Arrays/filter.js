// Filter, map, reduce - funções mais importantes
// Filter sempre retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
// indices       0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Mais complexo e confuso
function callbackFilter(valor, indice, array){
    // Filter precisa de valores boleanos
    // True - Adiciona no array. False - não adiciona
    if(valor > 10){
        return true;
    }
    else{
        return false;
    }
}

// Mais simples
// Caso vá utilizar a função mais vezes, cria ela normal, caso contrário, faça uma função anônima
function callbackFilterSimp(valor){
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter); // Função de callback
const numerosFiltradosSimp = numeros.filter((valor, indice, array) => {
    console.log(valor, indice);
    return valor > 10;
}); // Função anonima

console.log(numerosFiltrados);





const pessoas = [
    {nome: 'Guilherme', idade: 17},
    {nome: 'Marcos', idade: 34},
    {nome: 'Rodrigo', idade: 22},
    {nome: 'Sueli', idade: 55},
    {nome: 'Marianna', idade: 18},
    {nome: 'Gabi', idade: 78}
];

// Fiz antes dele explicar :D
const nomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
const quaseIdoso = pessoas.filter(valor => valor.idade > 50);
const terminaComA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().endsWith('a'));

console.log(nomeGrande, quaseIdoso, terminaComA);
