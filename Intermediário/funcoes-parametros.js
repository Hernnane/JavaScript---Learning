// ASSINATURA DE FUNÇÕES & PARÂMETROS OPCIONAIS

//-----------------------------------------------------------------------------------------------------------------------------

//PARÂMETRO NÃO OBRIGATÓRIO

// Criando uma função com parâmetro não obrigatório
function saudacao(nome = "Visitante"){
    console.log(`Olá, ${nome}!`);
};

// Chamando a função sem passar um parâmetro
console.log("------------------------------------------------------------");
console.log("*SEM PARÂMETRO*");
saudacao();
console.log("------------------------------------------------------------");
// Chamando a função passando o parâmetro
console.log("------------------------------------------------------------");
console.log("*COM PARÂMETRO*");
saudacao("Hernnane");
console.log("------------------------------------------------------------");

//-----------------------------------------------------------------------------------------------------------------------------

// REST PARAMETERS

// Criando uma função utilizando REST no parâmetro
function somarTodos(...numeros){
    return numeros.reduce((total, numero) => total + numero, 0);
};

// Executando a soma com três parâmetros
console.log("------------------------------------------------------------");
console.log("*TRÊS PARÂMETROS*");
console.log(somarTodos(1, 5, 8));
console.log("------------------------------------------------------------");

// Executando a soma com cinco parâmetros
console.log("------------------------------------------------------------");
console.log("*CINCO PARÂMETROS*");
console.log(somarTodos(1, 5, 8, 12, 15));
console.log("------------------------------------------------------------");

//-----------------------------------------------------------------------------------------------------------------------------

// PARÂMETROS COM DESESTRUTURAÇÃO

// Criando função utilizando desestruturação no parâmetro
function apresentar({nome, idade}){
    console.log(`Nome: ${nome}, Idade: ${idade}`);
};

// Criando um objeto literal
const pessoa = {
    nome: "Hernnane",
    idade: 26
};

// Chamando a função e passando o objeto como parâmetro (a desestruturação vai extrair os dados especificados)
// Executando a soma com cinco parâmetros
console.log("------------------------------------------------------------");
console.log("*PARÂMETRO COM DESESTRUTURAÇÃO*");
apresentar(pessoa);
console.log("------------------------------------------------------------");