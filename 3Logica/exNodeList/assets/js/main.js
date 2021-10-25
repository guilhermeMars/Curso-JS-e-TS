const paragrafos = document.querySelector('.paragrafos');
const paragrafosAll = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backColor = estilosBody.backgroundColor;


for(let i in paragrafosAll){
    paragrafosAll[i].style.backgroundColor = backColor;
    paragrafosAll[i].style.color = 'white';
}
