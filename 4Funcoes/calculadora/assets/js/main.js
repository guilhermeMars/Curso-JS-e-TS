function criaCalculadora(){ // Normalmente a calculadora não seria um factory function, pois no programa ela seria utilizada apenas uma vez
    // Pode-se ter variáveis aqui dentro
    return{
        // Atributos em cima, métodos em baixo
        display: document.querySelector('.display'),

        inicia (){
            this.clickBotao();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },
        
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value
            
            try{
                conta = eval(this.display.value); // eval - Função perigosa, pois tenta executar o que foi digitado em JS (sendo assim, sinais de +, -, / seriam executados, porém outras coisas como alert também seriam)
                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e){
                alert('Conta inválida');
                return;
            }
        },

        clickBotao(){
            // this -> calculadora
            document.addEventListener('click', e => { // Arrow function faz com que o this continue o mesmo
                // this -> document
                // Quem chama o método é o this
                const element = e.target; // .target - o que está sendo clickado

                if(element.classList.contains('btn-num')){
                    this.btnParaDisplay(element.innerText); // This - Método vai ser chamado de outro método
                }

                if(element.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(element.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(element.classList.contains('btn-equal')){
                    this.realizaConta();
                }
            }); // Faz com que a função use o this da calculadora, não o do document
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
