let num1 = 1;
let num2 = 4.2;
let num3 = 10.736341;
console.log(num1.toString);
console.log(num3.toFixed(2));
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
let temp = num1 + "Olá"; //Conta qeu funciona errada
console.log(Number.isNaN(temp));

let num4 = 0.7;
let num5 = 0.1;
num4 += num5;
console.log(num4); //Existe uma certa imprecisão, to fixed não funciona pois não é mais um inteiro
num4 = Number(num4.toFixed(2));
console.log(num4);

//Resumo: Número tem uma certa imprecisão