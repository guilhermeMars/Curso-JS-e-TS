/* 
Comparação
    > Maior que
    < Menor que
    <= e >= Maior igual e menor igual
    == Igualdade (apenas de valor) // Não muito utilizado
    === Igualdade restrita (valor e tipo)
    != Diferença (apenas de valor) // Não muito utilizado
    !== Diferença restrita (valor e tipo)

Lógicos
    && - And ou E
    || - Or ou Ou
    ! - Not ou Não (Inverte o valor)

Avaliação de Circuito
    - Com o operador lógico && a expressào para de validar quando encontra um valor falso e retorna o mesmo
    - Existem valores que avaliam em falso
        - false
        - 0
        - '' "" `` (string vazia)
        - null / undefined
        - NaN
*/
function exemplo(){
    return console.log('exemplo');
}
const vaiExecutar = true;
vaiExecutar && exemplo();

const corUsuario = null; //tente trocar por uma 'cor'
const corUtilizada = corUsuario || 'preto';

console.log(corUtilizada);
