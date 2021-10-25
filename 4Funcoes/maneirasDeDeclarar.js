// Function hoisting - engine do js eleva a declaração de funções para o topo do projeto
falaOi(); //Ocorreu o hoisting, pois a função, em teoria, vinha depois

function falaOi(){ // Declaração da função
    console.log('Oi!');
}

// First-class objects (Objetos de primeira classe) - Função pode ser tratada como dado
const souUmDado = function(){ // Function expression
    console.log('Sou um dado :)')
};

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo: ');
    funcao();
}

executaFuncao(souUmDado); // Já que a função souUmDado foi tratado como dado, pode ser passado como parâmetro

// Arrow function - function expression, só que bem mais curta
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

setInterval(function(){

}, 1000); // Está tratando a função anônima como dado, pois está passando como parâmetro

// Dentro de um objeto
const obj = {
    // falar: function(){

    // } // Também funciona para declarar uma função
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar(); //Usar um objeto como notação para chama-lo
