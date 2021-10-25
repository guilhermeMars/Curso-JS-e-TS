// IIFE - Immediately incoked function expression (Função auto-invocada)
// É executada imediatamente e não toca o escopo global
// Protege do escopo global

(function(){

    // IIFE
    
})();

(function(idade, peso, altura){
    console.log(123456);

    const nome = 'Guilherme';
    console.log(nome);

    function falaOla (nome){
        return 'Olá ' + nome;
    }
    console.log(falaOla(nome));

    console.log(idade, peso, altura);

    // É executada imediatamente e não toca o escopo global
})(30, 80, 1.83);

const nome = 'Não toca o escopo global';
