/*
let
    - Não pode ser redeclarado
    - Possui escopo de bloco
        - A engine vai voltando de bloco em bloco para poder utilizar
var
    - Pode ser redeclarada
    - Só possui escopo de função, funciona fora dos if's
    - Faz hoisting
função
    - Bloco da função é protegido e é especial
    - Variáveis criadas dentro da função não são acessadas de fora, mas o contrário acontece
        - É egoísta :)
    
*/
const verdadeira = true;

//Teste com let
let nome = 'Marcio';
if(verdadeira){
    let nome = 'Otavio'; //Se não tivesse isso, apareceria o Marcio
    console.log(nome);

    if(verdadeira){
        let nome = 'Outra coisa'; //São todas variaveis diferentes
        console.log(nome);
    }
}

// Teste com var
var nome2 = 'Juan'; // Criando
if(verdadeira){
    var nome2 = 'Otavio'; // Redeclarando

    if(verdadeira){
        var nome2 = 'Outra coisa'; // Redeclarando
    }
}
console.log(nome, nome2); // o var (nome2) foi alterado, enquanto o let (nome), não

// Teste com função

var fora = 'estou fora'
function falaOi(){
    var dentro = 'estou dentro';
    console.log(dentro, fora);
}
//console.log(dentro); // Dá erro pois está fora da função
falaOi();

//Hoisting - As varíaveis são declaradas no início do programa, mas o valor não é atibuido

console.log(sobrenome); // Irá dar undefined

var sobrenome = 'Miranda'; // Não acontece com let
