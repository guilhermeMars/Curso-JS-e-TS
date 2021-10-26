const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

// Forma errada
const num3 = num1 + num2; //Junta os valores, não os arrays
console.log(num3);

// Forma correta
const num4 = num1.concat(num2);
console.log(num4);

const num5 = num1.concat(num2, [7, 8, 9], 'Guilherme');
console.log(num5);

// ... rest -> ... spread
// Faz a mesma coisa que o concat, porém de forma mais simples
const num6 = [...num1, 'Guilherme', ...num2, [7, 9, 8], ...[10, 11, 12]];
console.log(num6);

// Tudo em arrays funciona em objetos
