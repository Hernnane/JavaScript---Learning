// OBJETOS - Criação e Manipulação
//-----------------------------------------------------------------------------------------------------------------------------

// MAIS SIMPLES [OBJETO LITERAL] - Já vimos**
const pessoa1 = {
    nome: "Gabriel",
    idade: 26,
    profissao: "Técnico"
}
// Exibindo pessoa1
console.log("------------------------------------------------------------");
console.log("*OBJETO LITERAL*");
console.log(pessoa1);
//-----------------------------------------------------------------------------------------------------------------------------

// CONSTRUCTOR OBJECT - É do próprio JS**
const pessoa2 = new Object();
// Adiciona um por um chamando a instância criada com OBJECT()
pessoa2.nome = "Hernnane";
pessoa2.idade = 26;
pessoa2.profissao = "Técnico";
// Exibindo pessoa2
console.log("------------------------------------------------------------");
console.log("*OBJECT() - Construtor JS*");
console.log(pessoa2);

//-----------------------------------------------------------------------------------------------------------------------------

// FUNÇÕES CONSTRUTORAS**

// Cria uma função geral e depois instancia
function Pessoa(nome, idade, profissao){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
};
// Instanciando a função Pessoa
const pessoa3 = new Pessoa("Essencio", 26, "Técnico");
// Exibindo pessoa 3
console.log("------------------------------------------------------------");
console.log("*FUNÇÕES CONSTRUTORAS*");
console.log(pessoa3);

//-----------------------------------------------------------------------------------------------------------------------------

// CLASS - Classes**

// Cria uma classe onde estarão os atributos, propriedades e métodos relacionados a Pessoah
class Pessoah {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
// Instanciando um objeto da classe Pessoah
const pessoa4 = new Pessoah("Moura", 26, "Técnico");
// Exibindo
console.log("------------------------------------------------------------");
console.log("*CLASSES*");
console.log(pessoa4);

//-----------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIOS - Objeto Literal => Carro [marca/modelo/ano]

// Criando o Objeto Literal
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 1985
}
// Exibindo
console.log("------------------------------------------------------------");
console.log("*Carro*");
console.log(carro);

//-----------------------------------------------------------------------------------------------------------------------------

//EXERCÍCIOS - Classe para adicionar produtos de um e-commerce

// Criando a Classe
class Produtos{
    constructor(nome, preco, qtdeEstoque){
        this.nome = nome;
        this.preco = preco;
        this.qtdeEstoque = qtdeEstoque;
    }
}

// Instanciando os objetos da classe Produtos
const monitorKabum = new Produtos("Monitor Kabum", "R$ 1.200,00", 10);
const microfoneFifine = new Produtos("Microfone Fifine", "R$ 250,00", 15);
const webcamRedragon = new Produtos("Web Cam Redragon", "R$ 200,00", 20);
// Exibindo
console.log("------------------------------------------------------------");
console.log("*Produtos*");
console.log(monitorKabum);
console.log(microfoneFifine);
console.log(webcamRedragon);