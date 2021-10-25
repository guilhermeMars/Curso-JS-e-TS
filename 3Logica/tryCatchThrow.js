// try{
//     console.log(naoExisto);
// } catch(err){
//     console.log('naoExisto não existe :)');
//     console.log(err); // Não exiba o erro para o usuário
// } // Tratamento de erros

function soma(num1, num2){
    if(Number.isNaN(num1) || typeof num2 !== 'number'){ // Os dois verificam a mesma coisa
        throw('num1 e num2 precisam ser números');
    }

    return num1 + num2;
}

try{
    console.log(soma(1, 2));
    console.log(soma(1, 'banana'));
} catch(error){
    // console.log(error);
    console.log('Algum erro mais amigável para o usuário :D');
}
