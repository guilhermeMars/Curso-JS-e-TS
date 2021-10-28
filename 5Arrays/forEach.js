// Forma diferente de iterar
// Apenas disponível em arrays

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// For off, já aprendido
for(let valor of num1){
    console.log(valor);
}

// For Each
// Faz a mesma coisa que as outras funções aprendidas, porém não retorna nada
num1.forEach((valor, indice, array) =>{
    console.log(valor, indice);
});
