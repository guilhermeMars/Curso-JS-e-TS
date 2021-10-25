function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }; 

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const element = event.target; // Se refere ao botão pressionado
            if(element.classList.contains('btn-num')) this.addNumDisplay(element);
            if(element.classList.contains('btn-clear')) this.clear();
            if(element.classList.contains('btn-del')) this.del();
            if(element.classList.contains('btn-equal')) this.realizarConta();
        });
    }

    this.addNumDisplay = element => {
        this.display.value += element.innerText; // Arrow function
        this.display.focus(); // Para funcionar o enter, sem adicionar o último num da tela
    }
    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizarConta = () =>{
        try{
            const conta = eval(this.display.value);
            if(isNaN(conta)){
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        }catch (e){
            alert('Conta inválida');
            return;
        }
    }

    this.capturaEnter = () =>{
        document.addEventListener('keypress', e =>{
            if(e.keyCode !== 13) return;
            this.realizarConta();
        });
    }
}

const calculadora = new Calculadora(); // Usar o molde para criar uma nova função
calculadora.inicia();
