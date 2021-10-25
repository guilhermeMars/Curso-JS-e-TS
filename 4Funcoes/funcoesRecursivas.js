// Funções recursivas - se chama devolta
// O navegador possui um limite máximo de recursividade, e trava a mesma após passar esse limite

function recursiva(max){
    if(max >= 10) return; // Limite para recursividade
    max++
    console.log(max);
    recursiva(max); // Se auto chama
}

recursiva(5);
