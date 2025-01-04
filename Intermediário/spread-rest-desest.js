// OPERADORES REST/SPREAD & DESESTRUTURAÇÃO

// Iniciando um objeto literal
const livro = {
    titulo: "Percy Jackson and The Olympians",
    autor: "Rick Riordan",
    ano: 2005
};

// Exibindo as propriedades antigas
console.log("------------------------------------------------------------");
console.log("*ENTRIES ANTIGOS*");
console.log(Object.entries(livro));
console.log("------------------------------------------------------------");

// Adicionando propriedade com REST (DEPOIS DO "=")
const livroAtualizado = {
    ...livro,
    editora: "Intrínseca"
}

// Exibindo as propriedades novas
console.log("------------------------------------------------------------");
console.log("*ENTRIES NOVOS*");
console.log(Object.entries(livroAtualizado));
console.log("------------------------------------------------------------");

// Extraindo propriedades específicas com DESESTRUTURAÇÃO
const {titulo, autor} = livro;

// Exibindo propriedades específicas
console.log("------------------------------------------------------------");
console.log("*ENTRIES ESPECÍFICOS - DESESTRUTURAÇÃO*");
console.log(titulo);
console.log(autor);
console.log("------------------------------------------------------------");

// Extraindo todos os capítulos restantes com o SPREAD (ANTES DO "=")
const capitulos = [1, 2, 3, 4, 5];
const [primeiro, ...outros] = capitulos;

// Exibindo propriedades específicas
console.log("------------------------------------------------------------");
console.log("*ENTRIES ESPECÍFICOS - SPREAD*");
console.log("Primeiro Capítulo: ");
console.log(primeiro);
console.log("Outros Capítulos: ");
console.log(outros);
console.log("------------------------------------------------------------");