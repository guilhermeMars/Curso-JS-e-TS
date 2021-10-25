// Funciona em todo os laços

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of num) {
    
    if(numero === 2 || numero === 5){
        console.log('Pulei um num');
        continue; // Continua para a próxima iteração, pula essa
    }

    if(numero === 7){
        console.log('Encontrei o 7, saindo do laço..');
        break; // Para o laço no mesmo momento
    }

    console.log(numero);
}
