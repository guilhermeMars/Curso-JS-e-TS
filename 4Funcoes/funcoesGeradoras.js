// Conseguem pausar o código em determinado local
// Lazy avaluation - não define todos os valores de uma vez, vai entregando conforme executa. Melhor performance

function* geradora01(){
    // Qualquer código
    yield 'Valor 1'; // Funciona como o return

    // Qualquer código
    yield 'Valor 2';

    // Qualquer valor
    yield 'Valor 3';
}

const g1 = geradora01();
// console.log(g1);
// console.log(g1.next()); // Value - valor, done - Se a função chegou ao final
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next()); // done - true

// Pode ser iterado
for(let valor of g1){
    console.log(valor);
}

// Gerador infinito

function* geradora02(){
    let i = 0

    while(true){
        yield i;
        i++
    }
}

const g2 = geradora02();
console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value); // Infinito


//Delegar funções das geradoras
function* geradora03(){
    yield 0;
    yield 1;
    yield 2
}

function* geradora04(){
    yield* geradora03();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora04();
for(let valor of g4){
    console.log(valor);
}

function* geradora05(){
    yield function(){
        console.log('Vim do y1');
    };

    return function(){ // Faz com que pare de executar o código
        console.log('Vim do return');
    }

    // Código

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora05();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
