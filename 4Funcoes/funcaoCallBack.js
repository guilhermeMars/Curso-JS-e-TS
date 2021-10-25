// Funções que são executadas quando uma ação finnaliza
// Em um projeto normal, não dá pra saber quais funções executarão mais ou menos rápidas que outras
// Callback é utilizado quando precisa que tal coisa execute primeiro que outra

// setTimeOut é para simular a demora de processamento

function rand(min = 1000, max = 3000){ // Vai gerar um número aleatório, que servirá como tempo
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

function f1(){
    setTimeout(function(){
        console.log('f1');
    }, rand());
}
function f2(){
    setTimeout(function(){
        console.log('f2');
    }, rand());
}
function f3(){
    setTimeout(function(){
        console.log('f3')
    }, rand());
}
f1();
f2();
f3();
console.log('Olá mundo'); // Com o setTimeout, o olá mundo é executado primeiro, mesmo estando no final da função

// Como fazer para que as funções executem na ordem, sem retirar o timeout

function f4(callback){
    setTimeout(function(){
        console.log('f4');
        if(callback) callback(); // Se existir um callback, execute o callback
    }, rand());
}
function f5(callback){
    setTimeout(function(){
        console.log('f5');
        if(callback) callback();
    }, rand());
}
function f6(callback){
    setTimeout(function(){
        console.log('f6')
        if(callback) callback();
    }, rand());
}
f4(function(){ // Callback hell
    f5(function(){
        f6(function(){
            console.log('Ola mundo')
        });
    });
});

// Também pode ser feito assim

f4(f4Callback());

function f1Callback(){
    f2(f2Callback());
}

function f2Callback(){
    f3(f3Callback());
}

function f3Callback(){
    console.log('Olá Mund0')
}
