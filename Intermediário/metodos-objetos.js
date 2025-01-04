// MÉTODOS EM OBJETOS

// Iniciando um objeto literal
const carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2012,

    informacoes(){
        return `Marca: ${this.marca} | Modelo: ${this.modelo} | ${this.ano}`;
    },

    atualizarAno(novoAno){
        this.ano = novoAno;
    }

};

// Exibindo informações antigas
console.log("------------------------------------------------------------");
console.log("*INFORMAÇÕES ANTIGAS - CARRO*");
console.log(carro.informacoes());
console.log("------------------------------------------------------------");

// Atualizando a propriedade ano no objeto
carro.atualizarAno(2019);

// Exibindo informações novas
console.log("------------------------------------------------------------");
console.log("*INFORMAÇÕES NOVAS - CARRO*");
console.log(carro.informacoes());
console.log("------------------------------------------------------------");