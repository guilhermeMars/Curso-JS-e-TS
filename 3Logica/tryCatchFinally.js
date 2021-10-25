try{
    // Executada quando não tem erros
}catch(errinho){
    // Executada quando há erros
} finally{
    // Sempre é executado
}

try{
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo'); // Caso ocorra um erro aqui, o arquivo não é fechado
    //console.log('Fechei o arquivo');
}catch(errinho){
    console.log('Tratando o erro');
} finally{
    console.log('Fechei o arquivo');
}

function retornaHora(data){
    if(data && !(data instanceof Date)){ // instance of - é uma instância de certa classe
        throw new TypeError('Esperando isntância de date');
    }

    if(!data){
        data = new Date();
    }
    
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Tira o PM
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    //Tratar erro
} finally{
    console.log('Tenha um bom dia');
}
