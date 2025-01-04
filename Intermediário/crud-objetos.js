// ADICIONANDO / ATUALIZANDO / REMOVENDO - Propriedades

// Criando um objeto literal
const pessoa = {
    nome: "Gabriel",
    sobrenome: "Moura"
};

// Exibindo as propriedades antigas
console.log("------------------------------------------------------------");
console.log("*ENTRIES ANTIGOS*");
console.log(Object.entries(pessoa));
console.log("------------------------------------------------------------");

// Adicionando outra propriedade
pessoa.idade = 26;

// Exibindo as novas propriedades
console.log("------------------------------------------------------------");
console.log("*ENTRIES NOVOS*");
console.log(Object.entries(pessoa));
console.log("------------------------------------------------------------");

// Alterando uma das propriedades
pessoa.sobrenome = "Essencio";

// Exibindo as propriedades atualizadas
console.log("------------------------------------------------------------");
console.log("*ENTRIES ATUALIZADOS*");
console.log(Object.entries(pessoa));
console.log("------------------------------------------------------------");