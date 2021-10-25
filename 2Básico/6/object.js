//Objeto serve para relacionar variáveis e funções

const pessoal = {
    nome: 'João',
    sobrenome: 'Carlos',
    idade: 23
};

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

console.log(pessoal.nome);

const pessoa01 = criaPessoa('Sérgio', 'Miranda', 23);
const pessoa02 = criaPessoa('Maria', 'Clara', 65);

console.log(pessoa01.nome);

const pessoa = {
    nome: 'Marcio',
    idade: 32,
    fala(){
        console.log(`${this.nome} está de dando oi :)`);
        console.log(`Sua idade é ${this.idade}`);
    },

    aumentarIdade(){
        ++this.idade
    }
}

pessoa.fala();
pessoa.aumentarIdade();
pessoa.fala();