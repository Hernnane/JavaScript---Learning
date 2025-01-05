// FUNÇÕES ASSÍNCRONAS E PROMISSES

//-----------------------------------------------------------------------------------------------------------------------------

//DELAY 5 SEGUNDOS**

// Iniciando uma promise que espera 10 segundos e exibe uma mensagem depois
const wait5 = () => {
    return new Promise((resolve, reject) => {
        // Exibe uma mensagem antes de contar os 5 segundos
        console.log("Esperando 5 segundos...");
    
        // Chamando a função Timeout e definindo o valor do delay
        setTimeout(() => {
            console.log("Pronto! Passaram 5 segundos!");
            resolve();
        }, 5000);
    });
}

//-----------------------------------------------------------------------------------------------------------------------------

// DELAY DINÂMICO (USUÁRIO DEFINE O TEMPO)**

// Criando uma Promise que recebe um parâmetro que faz um delay de um tempo definido em códico dinâmicamente
const wait = (segundos) => {
    return new Promise((resolve, reject) => {
        // Exibe uma mensagem antes de começar a contar o tempo
        console.log(`Esperando ${segundos} segundos...`);
        // Converte o valor de segundos para milisegundos
        const miliSegundos = segundos * 1000;

        // Chamo a função Timeout e passo o valor recebido na Promisse
        setTimeout(() => {
            // Envio o RESOLVE para o then()
            console.log(`Pronto, ${segundos} segundos se passaram!`);
            resolve();
        },miliSegundos);
    });
};

//-----------------------------------------------------------------------------------------------------------------------------

// Criando a função async que executa as Promises criadas utilizando funções async/await
async function executarPromisses() {
    try {
        await wait5();
        await wait(5);

        console.log("Todas as tarefas concluídas!");
    }

    catch (erro) {
        console.log("Erro ao executar as taregas", erro);
    }
};

// Executando a função async que executa as Promises criadas utilizando funções async/await
executarPromisses();