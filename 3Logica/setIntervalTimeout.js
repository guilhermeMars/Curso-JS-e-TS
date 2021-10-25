function mostrarHora(){
    let data = new Date();
    
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoInterval(){ç
//     console.log(mostrarHora());
// }µµ

const timer = setInterval(function (){
    console.log(mostrarHora());
}, 1000); // Passa como parâmetros a função (sem ser executada) e o tempo para ir rodando (em milissegundos). Configura um intervalo de tempo para uma função ser executada

setTimeout(function (){ // Funciona da mesma forma do set interval, mas só roda uma vez
    clearInterval(timer);
}, 5000);

setTimeout(function (){
    console.log('O programa acabou, tchau :)')
}, 6000);
