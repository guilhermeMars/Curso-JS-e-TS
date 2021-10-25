// Escopo Lexico - Função sabe o local que foi declarada, o tem declarado dentro dela e o que foi declarado em seus vizinhos

const nome = 'Guilherme';

function falaNome(){
    // const nome = 'Martins'
    console.log(nome);
}
falaNome();

function usaFalaNome(){
    const nome = 'Spiandorin';
    falaNome(); // Apenas executa a função, que sabe onde foi declarada, logo, este escopo não muda em nada
}
usaFalaNome();

