function ePaisagem(largura, altura){
    if(largura > altura){
        return true;
    } else if(altura > largura){
        return false;
    } else{
        return 'Quadrado';
    }
}

const ePaisagem2 = (largura, altura) => largura > altura ? true : false;

// Fiz tudo daqui pra cima

const ePaisagem3 = (largura, altura) => largura > altura;
