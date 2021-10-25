// Arrays = Valores por referência (Caso tenham dois valores iguais, um impacta no outro, pois eles se referênciam)

// O array tem 3 elementos
//                  0           1          2
const nomes = ['Guilherme', 'Marianna', 'Sueli'];
// Funciona do mesmo jeito de 
//const nomes = new Array('Guilherme', 'Marianna', 'Vânia');
nomes[2] = 'Vânia';
delete nomes[2];
console.log(nomes);

const novo = nomes; // Novo está referenciando o valor de nomes
novo.pop();
console.log(nomes); // Nomes sofreu o pop

const novo2 = [...nomes]; // Usando o spread operator os valores não ficam mais referênciados
novo2.pop();
console.log(nomes); // nomes não foi alterado pelo pop

const removido = nomes.pop() // Remove e adiciona o que foi removido na variável
console.log(nomes, removido);

const nomes2 = ['Guilherme', 'Marianna', 'Sueli;'];
const removido2 = nomes2.shift(); // Desloca todos os arrays de posição
console.log(removido2, nomes2);

//
nomes2.push('Vânia'); // Adiciona no final, muito utilizado
//
nomes2.unshift('Gabriel'); // Adiciona no inicio, altera todos os índices
console.log(nomes2);

const novo3 = nomes.slice(1, 3);
console.log(novo3);
const novo4 = nomes.slice(1, -1);
console.log(novo4);

const nome = 'Guilherme Martins Spiandorin';
const nomes3 = nome.split(' '); // Adiciona os valores separados por espaço em um array
console.log(nomes3);

const nome2 = nomes3.join(' '); // Junta todos separando apenas por espaço
console.log(nome2);