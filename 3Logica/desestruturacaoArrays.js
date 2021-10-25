// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras; //Atribuição via desestruturação, está reatribuindo o valor de todas as variáveis

// console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const primeiroNum = numeros[0]; // Podeiria fazer isto para cada um dos índices
// const [primeiroNum, segundoNum, terceiroNum, ...resto] = numeros;

// console.log(primeiroNum, segundoNum, terceiroNum);
// console.log(resto);

// É possivel pular valores
const [um, , tres, ,cinco] = numeros; 
console.log(um, tres, cinco);

// Complicando um pouco
//                      0          1          2
//                   0  1  2    0  1  2    0  1  2
const numeros02 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

//const seis = numeros02[1][2]; // Pode ser feito assim
const [, [, , seis]] = numeros02; // Pode deixar mais complexo do que simples
console.log(seis);
