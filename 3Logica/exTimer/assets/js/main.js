function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000); // JS recebe em milésimos de segundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // Time zone, GMT ou UTC pega 0
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() { // Função atualiza a variável timer
        segundos ++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000); // Recebe uma função anônima e depois o parâmetro de quanto tempo irá exexutar (1000 = 1 segundo)
}

iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciaRelogio();
    relogio.classList.remove('pausado');
    //relogio.style.color = 'black';
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
    //relogio.style.color = 'red';
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
    //relogio.style.color = 'black';
});

// Uma forma mais performática de se fazer, útil caso hajam vários botões

// document.addEventListener('click', function(e){
//     const elemento = e.target;
//     if(elemento.classList.contains('iniciar')){
//         clearInterval(timer);
//         iniciaRelogio();
//         relogio.classList.remove('pausado');
//     }

//     if(elemento.classList.contains('pausar')){
//         clearInterval(timer);
//         relogio.classList.add('pausado');
//     }

//     if(elemento.classList.contains('zerar')){
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         segundos = 0;
//         relogio.classList.remove('pausado');
//         //relogio.style.color = 'black';
//     }

// });
