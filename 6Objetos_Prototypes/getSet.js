// Getter's e setter's são utilizados para manter o programa mais seguro e também fazer as devidas validações

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                //console.log('Valor errado! Digite um número');
                throw new TypeError('Valor errado! Digite um número')
                return;
            }
            estoquePrivado = valor; 
        }
    });
}

function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('pequeno', ''); // Que daora :0
            nome = valor;
        }
    };
}

const p1 = new Produto('Blusa', 20, 3,);
p1.estoque = 5; // Vai para o set 
console.log(p1.estoque);

const p2 = criaProduto('Camisa');
p2.nome = 'Tênis pequeno'
console.log(p2.nome)