// Return
//  - Retorna um valor
//  - Termina a função
//  - Caso a função não tenha return, volta undefined
function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(2,5));
let s1 = soma(4, 3);
console.log(s1);

function soma2(n1, n2){
    console.log(n1 + n2);
}
soma2(1, 6);

// document.addEventListener('click', function(){
//     // Função não retorna nada, mas é útil
// });

function criaPessoa(nome, sobrenome){
    return{
        nome, sobrenome // Um objeto
    };
}
const p1 = criaPessoa('Guilherme', 'Martins');
const p2 = {
    nome: 'Marcos',
    sobrenome: 'Maurício'
    // p1 e p2 Fazem a mesma coisa
}; 
console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto; // Return do falaResto
    }
    return falaResto; // Return do falaFrase
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!')); // Meu deus, que medo

fala = falaFrase('Eu gosto'); // fala se tornou uma função que possui falaResto()
resto = fala('de você sz');
console.log(resto);

// Exemplo de uso

// Repetição desnecessária

// function duplica(n){
//     return n * 2;
// }
// function triplica(n){
//     return n * 3;
// }
// function quadriplica(n){
//     return n * 4;
// }

function criaMultiplicador(multi){
    return function(n){
        return n * multi;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

