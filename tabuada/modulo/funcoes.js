// Função para gerar a tabuada.
function gerarTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    let tabuadaI = tabuadaInicial
    let tabuadaF = tabuadaFinal
    let contadorI = contadorInicial
    let contadorF = contadorFinal
    let status = false

    if (validarDadosTabuada(tabuadaI, tabuadaF, contadorI, contadorF)) {
        status = true

        // Laço para percorrer as tabuadas
        while (parseInt(tabuadaI) <= parseInt(tabuadaF)) {
            console.log('Tabuada do', tabuadaI)
            let contador = parseInt(contadorI)

            // Laço para calcular os valores da tabuada
            while (contador <= parseInt(contadorF)) {
                console.log(tabuadaI, 'x', contador, '=', parseInt(tabuadaI) * contador)
                contador++
            }

            tabuadaI++
        }
    }

    return status
}


// Função para validar os dados da tabuada
const validarDadosTabuada = function(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){
    let tabuadaI = tabuadaInicial
    let tabuadaF = tabuadaFinal
    let contadorI = contadorInicial
    let contadorF = contadorFinal
    let status = true

    if (tabuadaI == '' || tabuadaF == '' || contadorI == '' || contadorF == '') {
        console.log('ERRO: Todos os campos são obrigatórios.')
        status = false
    } else if (isNaN(tabuadaI) || isNaN(tabuadaF) || isNaN(contadorI) || isNaN(contadorF)) {
        console.log('ERRO: Apenas números são permitidos.')
        status = false
    } else if (tabuadaI < 2 || tabuadaF > 100 || contadorI < 1 || contadorF > 50) {
        console.log('ERRO: A tabuada deve ser entre 2 e 100, e os contadores entre 1 e 50.')
        status = false
    }

    return status
}


module.exports = {
    gerarTabuada
}