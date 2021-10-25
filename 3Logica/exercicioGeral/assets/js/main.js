const form = document.querySelector(".form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = form.querySelector("#peso"); //Pegando o input inteiro
    const inputAltura = form.querySelector("#altura");

    const peso = Number(inputPeso.value); //Pegando o valor
    const altura = Number(inputAltura.value);

    if(!peso || !altura){
        setResult('Valores Inválidos', false);
        return; //se for inválido, já para a função aqui
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResult(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3', ];

    if(imc >= 39.9)
        return nivel[5];
    if(imc >= 34.9)
        return nivel[4];
    if(imc >= 29.9)
        return nivel[3];
    if(imc >= 24.9)
        return nivel[2];
    if(imc >= 18.5)
        return nivel[1];
    if(imc < 18.5) 
        return nivel[0];
}

function getImc(peso, altura){
    return peso / (altura*altura);
}

function criaP(className){ //Funções com função específica, não apenas código
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    const resultado = document.querySelector("#result");
    resultado.innerHTML = '';

    const p = criaP();
    if (isValid) 
        p.classList.add('valido');
    else
        p.classList.add('invalido');
    p.innerHTML = msg;
    resultado.appendChild(p);
}

main();