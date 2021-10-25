const nomes = ['Lucas', 'Sergio', 'Samanta']; 

nomes.push('Mauricio'); //Coloca
nomes[nomes.length] = 'Roger'; //no final
nomes.unshift('Gustavo'); //Coloca no inicio
nomes.pop(); //Tira elementos do final
nomes.shift; //Tira elementos do início
const removido = nomes.pop();
delete nomes[3]; //Apaga sem mudar os índices(casas), o apagado fica em branco
console.log(nomes.slice(0, 2)); //Pega apenas até o 2
console.log(nomes.slice(0, -1)); //Tira o último número

console.log(nomes);
console.log(nomes[3]);
console.log(removido);

console.log(typeof nomes); //Array é um objeto
console.log(nomes instanceof Array); //Verifica se é um array

function soma(x = 1, y = 1){ //Caso não seja colocado nada, assume o valor de 1
    return x + y;
}

const raiz = function(n){ //Função anonima
    return n ** 0.5;
};

const elevado = z => n ** 2; //Arrow function, quando só tem uma linhaS
