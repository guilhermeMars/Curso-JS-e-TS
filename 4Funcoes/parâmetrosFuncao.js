function funcao(){
    console.log('Ola');
    console.log(arguments[0], arguments[1], arguments[3]); // Ao criar a função com a palavra function, ao mandar parâmetros na função, eles são armazenados, por padrão, nos arguments (mesmo que já tenham parâmetros, ele guarda todos nos arguments)
}
funcao('Valor', 1, 2, 3); // Js não dá erro caso envie um parâmetro, mesmo que a função não tenha um parâmetro

function somarTudo(){
    let total = 0;
    for(let argumentos of arguments){
        total += argumentos;
    }
    console.log(total);
}
somarTudo(1, 2, 3, 4, 5, 6);


function teste(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
teste(1, 2, 3); // Caso não sejam enviado nada nos parâmetros, eles ficam como undefined


function valorPadrão(a = 0, b = 3, c = 4){
    console.log(a + b + c);
}
valorPadrão(3, 7);
valorPadrão(3, undefined, 5); // Assim o b assume o valor padrão (única maneira)


function desestruturacaoObj({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
// let obj = {nome: 'Guilherme', sobrenome: 'Martins', idade: 17};
// desestruturacaoObj(obj);
desestruturacaoObj({nome: 'Guilherme', sobrenome: 'Martins', idade: 17});


function desestruturacaoArray([val1, val2, val3]){
    console.log(val1, val2, val3);
}
desestruturacaoArray(['Guilherme', 'Martins', 17]);


const conta = function conta(operador, acumulador, ...numeros){ // Rest operator (...) - adiciona tudo que vier após as outras variáveis neste rest (array), precisa ser o último parâmetro
    for(let numero of numeros){
        if(operador === '+')acumulador += numero;
        if(operador === '-')acumulador -= numero;
        if(operador === '*')acumulador *= numero;
        if(operador === '/')acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+', 2, 10, 20, 30, 40);

// Pode-se utilizar o rest operator ao invés dos arguments :)
