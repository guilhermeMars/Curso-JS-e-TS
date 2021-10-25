/*
Date é uma função construtora
    - Começa com letra maiúscula
*/
/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix 
*/
const data = new Date(2021, 7, 26, 15, 4, 27, 999); //Ano, mês (começa do 0), dia, hora, minuto, segundo, milesegundo 
console.log(data.toString());
// Caso passe do possível (61 segundos) ele passa o número para a próxima casa ex: 
const ex = new Date(2021, 7, 26, 15, 4, 27, 1000); // Vai aumentar um segundo, pois não existe 1000 milessegundos
console.log(ex.toString());
//Omitir valores faz com que fiquem em 0
const ex2 = new Date(2021, 7, 26);
console.log(ex2.toString());

const data2 = new Date('2021-08-26 15:11:59.999'); //String que representa uma data
console.log(data2.toString());
console.log('Dia', data2.getDate()); //Número do dia
console.log('Mês', data2.getMonth() + 1); //Começa do zero :)
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Minuto', data2.getMinutes());
console.log('Segundo', data2.getSeconds());
console.log('Milissegundos', data2.getMilliseconds());
console.log('Dia Semana', data2.getDay()); //0 - Domingo, 6 - Sábado

console.log(Date.now()); //Representa do marco 0 até o dia de hoje
const data3 = new Date(1630002118197); //Funciona para ver a data atual, algumas pessoas utilizam em bases de dados
console.log(data3.toString())

//Fazendo uma função
function zeroAEsquerda(num){ //Função para adicionar 0 atrás dos números
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);