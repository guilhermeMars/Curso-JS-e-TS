
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        // Property descriptor

        enumerable: true, // Fazer com que apareça igual nome e preço
        value: estoque, // Adiciona o valor de estoque
        writable: false, // Valor não pode ser alterado
        configurable: false  // Chave não pode ser apagada nem reconfigurável

        // Pode ter funções
        // value: function(){
        //     return estoque;
        // }
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: preço, 
            writable: true,
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true,
            configurable: false 
        }
    });

    //Getter e setters podem se colocados aqui

}

const p1 = new Produto('Camiseta', 20, 3);
delete p1.estoque; // Não apaga por conta do configurable
console.log(p1);
