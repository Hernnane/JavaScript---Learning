// Função mais antiga
function calcularArea1(largura, altura){
    return largura * altura;
}

console.log(calcularArea1(10, 10));

// Arrow Function => mais atual
const calcularArea2 = (largura, altura) => largura * altura;

console.log(calcularArea2(10,10));