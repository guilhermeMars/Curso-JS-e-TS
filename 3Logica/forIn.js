// For in - lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Goiaba', 'Uva'];

// for(i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

for(let indice in frutas){ // Lendo os indices do array
    console.log(frutas[indice]);
}

// Objeto
const pessoa = {
    nome: 'Marcio',
    sobrenome: 'Silveira',
    idade: 30
}

for(let chaves in pessoa){
    console.log(chaves);
}

console.log(pessoa.nome);
console.log(pessoa['nome']);
