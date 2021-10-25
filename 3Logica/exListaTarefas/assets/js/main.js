const inputTarefa = document.querySelector('.inputTarefa');
const bntTarefa = document.querySelector('.btnAddTarefa');
const lista = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += '  '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar'); // Primeiro o tipo de atributo, depois o valor. Funciona para qualque tipo de atributo, como os do HTMl por exemplo (href, for...)
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar)
}

function criaTarefa(textInput){
    const li = criaLi();
    li.innerHTML = textInput;
    lista.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

bntTarefa.addEventListener('click', function (){
    if(!inputTarefa.value){ 
        return;
    }
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target; // Captura todos os eventos de click
    if(el.classList.contains('apagar')){
        el.parentElement.remove(); // Apagao pai do elemento
        salvarTarefas(); // Faz com que quando remover, atualize no localstorage
    }
});

function salvarTarefas(){
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Replace apaga o apagar que vinha junto por conta do botão. Trim tira o espaço que ficava sobrando
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Json de string, para poder salvar no navegador
    localStorage.setItem('tarefas', tarefasJSON); // Tarefas é o nome que será utilizado para recuperar os dados
}

function adicionaTarefasSalvas(){ // Puxa os dados do localstorage devolta para a página
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Converte o Json devolta para um objeto javascript

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
