//                 -5           -4         -3       -2       -1
//                  0           1           2        3        4
const nomes = ['Guilherme', 'Marianna', 'Gabriel', 'João', 'André'];

// nomes.splice(número que vai começar, quantos elementos serão removidos)
// nomes.splice(indice, delete, elem1, elem2, elem3)

//const removidos = nomes.splice(3, 2);
// const removidos = nomes.splice(-2, 2); // Faz a mesma coisa

// Adicionando
nomes.splice(3, 0, 'Clara'); // Adicionou Clara no índice 3
console.log(nomes);

// Substituindo
nomes.splice(2, 1, 'Roger');
console.log(nomes);

// pop
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);

// Shift
const removido  = nomes.splice(0, 1);
console.log(nomes, removido);

// Push
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);

// Unshift
nomes.splice(0, 0, 'Kleber');
console.log(nomes);
