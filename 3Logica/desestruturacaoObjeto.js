const pessoa = {
    nome: 'Luiz',
    sobrenome: 'da Silva',
    idade: 30,
    endereco: {
        rua: 'João Bissoto Filho',
        numero: 35
    }
}
// Atribuição via desestruturação

const {nome = 'Não existe', sobrenome, idade} = pessoa; // Está funcionando pois os nomes são iguais. O "Não existe" é um valor padrão, para caso não tenha nenhum valor no local
console.log(nome);

const { nome: nomePessoa = '', sobrenome: sobPessoa} = pessoa;
console.log(nomePessoa);

console.log(pessoa.nome);

const {endereco: {rua: r, numero}} = pessoa;
console.log(r, numero);

const { nome: nome02, ...resto} = pessoa;
console.log(resto);
