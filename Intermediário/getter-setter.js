// GETTERS & SETTERS - métodos para obter/definir valores de propriedades de objetos

// GET => Criando um objeto literal
const pessoa1 = {
    primeiroNome: "Gabriel",
    sobrenome: "Moura",

    get nomeCompleto(){
        return `${this.primeiroNome} ${this.sobrenome}`; // Colocar dentro de acento grave
    }
};

// Exibido o nome completo usando o método GET
console.log("------------------------------------------------------------");
console.log("*GET - NOME COMPLETO*");
console.log(pessoa1.nomeCompleto);

//-----------------------------------------------------------------------------------------------------------------------------

// SET => Criando um objeto literal
const pessoa2 = {
    nome: "Gabriel",
    sobrenome: "Essencio",

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    },

    set insereNome(nome){
        const partes = nome.split(" ");
        this.nome = partes[0];
        this.sobrenome = partes[1];
    }
};

console.log("------------------------------------------------------------");
console.log("*SET - Exibe o antigo e seta o novo*");
// Exibindo nome antes do SET
console.log(pessoa2.nomeCompleto);
// Exibindo o nome depois do SET
console.log(pessoa2.insereNome = "Caio Vitor");
console.log("------------------------------------------------------------");

//-----------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIOS - Get/Set

// Criando um objeto literal de produto
const produto = {
    preco: 1000,
    desconto: 100,

    // GET
    get precomDesconto(){
        return this.preco - this.desconto;
    },

    // SET
    set precomDesconto(novoPreco){
        this.desconto = this.preco - novoPreco;
    }
};

// Exibindo preço antes do SET
console.log("------------------------------------------------------------");
console.log("*PRODUTO*");
console.log("Preço Antigo:");
console.log(produto.precomDesconto);
// Alterando o valor do desconto com SET
produto.precomDesconto = 800;
// Exibindo o novo valor do desconto
console.log("Novo Valor de Desconto: ");
console.log(produto.desconto);
// Exibindo o novo preço com desconto
console.log("Novo Preço c/ Desconto: ")
console.log(produto.precomDesconto);
console.log("------------------------------------------------------------");