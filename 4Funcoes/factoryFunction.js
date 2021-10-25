// Funções que retornam objetos (por isso fábricas)

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' '); // Vai transformar todos os valores adicionados, em um vetor 
            // console.log(valor);
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); // Agora tem um espaço
            console.log(valor);
        },

        fala(assunto){ // Método - função dentro de um objeto
            return `${nome} está falando sobre ${assunto}. Ele também pesa ${this.peso} :)`; // nome já está sendo acessado pelo parâmetro
            // This - se refere a pessoa que chamou o que está executando (p1, nesse exemplo). Seria a mesma coisa que falar p1.nome, nesse caso
        },

        altura,
        peso, // Neste caso, já que não é um parâmetro, precisa-se usar o this

        // Getter
        get imc(){ // Fazer get imc, torna a função um atributo.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Guilherme', 'Martins', 1.83, 80);
const p2 = criaPessoa('Marianna', 'Orlandi', 1.70, 64); // Nesse caso, o this iria se tratar de p2
console.log(p1)
console.log(p1.fala('programação'));
console.log(p2.imc);
p1.nomeCompleto = 'Marianna Orlandi Azevedo';
console.log(p1.nomeCompleto);
