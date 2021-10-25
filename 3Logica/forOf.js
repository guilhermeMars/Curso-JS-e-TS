const nome = ['Luiz', 'Otávio', 'Henrique'];

// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o indíce/chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// Clássico
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('*****');

// For in
for(let i in nome){
    console.log(nome[i]);
}

console.log('*****');

// For of
//Quando tem um objeto iterável, não funciona para objetos
for (let valor of nome){ //Vem o valor em si
    console.log(valor);
}

console.log('*****');

nome.forEach(function(elemento, indice, array){ 
    console.log(elemento, indice, array);
});

// Com objetos

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Martins',
    idade: 17
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// Com for of, dá erro, pois não é iterável

// for(let valor of pessoa){
//     console.log(valor);
// }
