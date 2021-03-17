

function acaoBotao() {
    var resultado, operacao, valorP, valorS
    
    valorP = prompt("Primeiro valor: ")
    operacao = prompt("Operação (+, -, *, /): ")
    valorS = prompt("Segundo valor: ")

    if ( operacao == "+" ){
        resultado = parseInt(valorP) + parseInt(valorS)
    } else if(operacao == "-"){
        resultado = parseInt(valorP) - parseInt(valorS)
    } else if(operacao == "*"){
        resultado = parseInt(valorP) * parseInt(valorS)
    } else if(operacao == "/"){
        resultado = parseInt(valorP) / parseInt(valorS)
    }
    document.getElementById("calculo").innerText = resultado
}