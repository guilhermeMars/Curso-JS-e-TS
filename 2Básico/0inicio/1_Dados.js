// Strings

    //Pode ser feito utilizando '' ou "" ou ``. `` São multi-linhas e suportam variáveis
    //Para utilizar aspas dentro do que será escrito, é necessário mudar as aspas que circundam
    console.log("Guilherme `` ''")
    console.log(`Contas: ${1 + 1}`)

//Number

    /*Suportam todos os tipos de números
    33 - inteiros
    12.5 - reais
    NaN - not a number
    Infinity - infinito
    */
    console.log(33)
    console.log(-33)
    console.log(12 + 33)
    console.log(33 / 2)
    console.log(33 / 2)
    console.log(33 * "Palavra")
    console.log(33 === Infinity)

//Boolean

    // Somente dois valores - True or False
    console.log(true)

//Undefined x null
    /*
    undefined
        - Indefinido
        - Não existe
    null
        - Nulo
        - Não possui nada dentro
        - Existe mas não tem nada dentro
    Os dois são diferentes
    */

//Object
    /*
    Object
        - Dado Estrutural
        - Causa algum tipo de estrutura
    Propriedades / Atributos
    Funcionalidades / métodos
    Ex:
    {propriedade: "Valor"}
    */

    console.log({
        name: "Guilherme",
        idade: 20,
        andar: function(){
        console.log("Andar")
        }
    })

//Arrays
    /*
    Também estrutural
    Uma lista
    ["Guilherme", 17]
    */
    console.log([
        "Leite",
        "Ovos",
        62
    ])