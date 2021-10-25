/*
Valores imutáveis - string, number, boolean, undefined, null - Valores copiados
Valores mutáveis - Array, object, function - Valores por referência
    Todos apontam para o mesmo local na memória, logo alterando um, altera o outro também
*/
let nome = 'João';
let n = nome;
nome = 'Marcos'; //Mudar 'nome' não afeta 'n'
console.log(nome, n);

let array = [1, 2, 3];
let a = array;
array.push(4); //Mudar 'array' afeta 'a'
console.log(array, a)
let b = [...a]; //Dessa forma copia-se o valor e B se torna independente