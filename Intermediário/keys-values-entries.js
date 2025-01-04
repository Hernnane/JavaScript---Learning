// MÉTODOS NATIVOS PARA OBJETOS => KEYS/VALUES/ENTRIES

// Criando um objeto literal
const pessoa = {
    nome: "Gabriel",
    sobrenome: "Moura"
};

// Obtendo as chaves do objeto pessoa
const chaves = Object.keys(pessoa);
// Obtendo os valores do objeto pessoa
const valores = Object.values(pessoa);
// Obtendo as entradas (pares chave/valor) do objeto pessoa
const entradas = Object.entries(pessoa);

// Exibindo cada método nativo
console.log("------------------------------------------------------------");
console.log("*KEYS*");
console.log(chaves);
console.log("------------------------------------------------------------");
console.log("*VALUES*");
console.log(valores);
console.log("------------------------------------------------------------");
console.log("*ENTRIES*");
console.log(entradas);
console.log("------------------------------------------------------------");