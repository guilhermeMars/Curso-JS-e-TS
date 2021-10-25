// Closure - capacidade da função de acessar seu escopo lexico

function retornaFuncao(nome){
    // const nome = 'Guilherme';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Guilherme'); // Clousure - quando a gente chama a função que, ao fechar, não muda mais (Guilherme vai ser sempre Guilherme nesse contexto)
const funcao2 = retornaFuncao('Martins'); // Closure pode ser alterado de função a função, e fecha o escopo após isso (por isso closure)
console.dir(funcao); // dir - no navegador, mostra propriedades um pouco diferentes, mas tem a mesma função. Abra os scopos

console.log(funcao(), funcao2()); // As duas funções não vão mais mudar
