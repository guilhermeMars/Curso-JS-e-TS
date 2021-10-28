const pessoas = {
    nome: 'Guilherme', // Chaves do objeto
    sobrenome: 'Martins'
};

// Mesma coisa, porém situacionais 
console.log(pessoas.nome); // Mais intuitiva e simples
console.log(pessoas['sobrenome'])
const chave = 'sobrenome'
console.log(pessoas[chave]); // Serve para ser mais dinâmica

// Pode ser instanciado com new, construtor
const pessoa1 = new Object();
pessoa1.nome = 'Marianna';
pessoa1.sobrenome = 'Orlandi';
pessoa1.idade = 17;
pessoa1.falarNome = function(){
    console.log(`${this.nome} esta falando seu nome`);
};
pessoa1.falarNome();

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
};
console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    console.log(pessoa1[chave]);
};

// delete pessoa1.nome;
console.log(pessoa1);

// Factory Functions
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Guilherme', 'Martins');
console.log(p1.nomeCompleto);

// Constructor functions
// New - Constrói um objeto vazio e atrela a palavra this ao objeto
// É como se fizesse const p1 = {} e p1.nome = 'Guilherme'
// O p1 se torna o this
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Muito perigoso
    // Object.freeze(this);
}

const pessoa01 = new Pessoa('Guilherme', 'Martins');
p1.nome = 'Outro nome' // Pode-se alterar uma constante pois está alterando o valor do valor
Object.freeze(p1); // Agora o p1 não pode mais ser alterado
const pessoa02 = new Pessoa('Marianna', 'Orlandi');

console.log(pessoa01);
console.log(pessoa02);
