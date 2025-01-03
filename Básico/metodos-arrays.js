// Criando um array de números
const numeros = [1, 2, 3, 4];

// MAP

// Usando o método MAP para criar um novo array com valores criados com base no array de números criado anteriormente
const numerosTransform = numeros.map(numero => numero + 10);

// Criando um FOR  para passar por cada índice do array numerosTransform e mostrá-lo usando o console.log
console.log("------------------------------------------------------------");
console.log("*MAP*");
for (let i = 0; i < numerosTransform.length; i++){
    console.log(numerosTransform[i]);
};

// FILTER

// Usando o método FILTER para colocar no array numerosFind somente os valores menores que 3
const numerosFind = numeros.filter(numero => numero <= 3);

// Criando um FOREACTH  para passar por cada índice do array numerosFind e mostrá-los usando o console.log
console.log("------------------------------------------------------------");
console.log("*FILTER*");
numerosFind.forEach(num => {
    console.log(num);
});

// REDUCE

// Usando o método REDUCE para obter a soma de todos os valores de dentro do array numeros
const numerosTotal = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);

// Exibindo o valor do array criado pelo método REDUCE
console.log("------------------------------------------------------------");
console.log("*REDUCE*");
console.log(numerosTotal);