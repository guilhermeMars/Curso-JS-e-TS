// Semelhança
// Funções construtoras e funções fábricas criam novos objetos (servem de moldes para vários objetos)
// Podem ter atributos privados

// Diferença
// Função fábrica = função normal que retorna um objeto (classe)
// Funções construtoras = já possui muitas coisas automatizadas para a criação do objeto. Precisa-se mudar a forma como escrave-se as funções

// Função construtora - Precisa do new. Primeira letra maiúscula.
// new - Cria um novo objeto vazio, faz o this referenciar o objeto e retorna o objeto

function Pessoa(nome, sobrenome){
    const ID = 123456; // Só exite dentro da function (privado)

    const metodoInterno = function(){

    }; // Só existe dentro da function (privado)

    // Atributos públicos (ex: this)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' Olá! Eu sou um belo método');
    }
}

const p1 = new Pessoa('Guilherme', 'Martins');
const p2 = new Pessoa('Marianna', 'Orlandi');

console.log(p1.nome, p2.sobrenome);
p1.metodo();
