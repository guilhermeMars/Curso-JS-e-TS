const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const conteiner = document.querySelector('.conteiner');
const div = document.createElement('div');

for(let i = 0; i < elements.length; i++){
    let {tag, texto} = elements[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; // Podia ser utilizada o innerHTML
    div.appendChild(tagCriada);
}

conteiner.appendChild(div);
