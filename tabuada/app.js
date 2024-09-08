// Importando o arquivo de funções
var numeros = require('./modulo/funcoes.js');
var readline = require('readline');

// Criando interface para receber dados do usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados para tabuada inicial e final
entradaDeDados.question('Digite a tabuada inicial (entre 2 e 100): ', function(valor1) {
    let tabuadaInicial = valor1;

    entradaDeDados.question('Digite a tabuada final (entre 2 e 100): ', function(valor2) {
        let tabuadaFinal = valor2;

        entradaDeDados.question('Digite o contador inicial (entre 1 e 50): ', function(valor3) {
            let contadorInicial = valor3;

            entradaDeDados.question('Digite o contador final (entre 1 e 50): ', function(valor4) {
                let contadorFinal = valor4;

                // Chamando a função para calcular a tabuada
                if (!numeros.gerarTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)) {
                    console.log('Não foi possível processar a requisição.');
                }

                
            })
        })
    })
})