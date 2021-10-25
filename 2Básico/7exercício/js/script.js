//colocando uma variável no escopo global, pode haver uma colisão com outra variável de mesmo nome de uma biblioteca, por exemplo
function meuEscopo(){ //não polui o escopo global, pois está restrita a função
    const form = document.querySelector('.form'); //chama da mesma forma que no css
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*form.onsubmit = function(evento){
        evento.preventDefault();
        alert('Funcionou!');
    }; //Uma forma de fazer */

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();