var unidadeUm, unidadeDois, valor, valorConvert
alert("Informe as unidades dos valores a serem convertidos (cm, dm, m, km)")
unidadeUm = prompt("de (cm, dm, m, km): ")
unidadeDois = prompt("para (cm, dm, m, km): ")
valor = prompt("Valor a converter: ")

if (unidadeUm == "cm"){
    if (unidadeDois == "cm"){
        valorConvert = parseInt(valor) / 1
    } else if (unidadeDois == "dm"){
        valorConvert = parseInt(valor) / 10
    } else if (unidadeDois == "m"){
        valorConvert = parseInt(valor) / 100
    } else if (unidadeDois == "km"){
        valorConvert = parseInt(valor) / 1000
    }
}
else if (unidadeUm == "dm"){
    if (unidadeDois == "cm"){
        valorConvert = parseInt(valor) * 10
    } else if (unidadeDois == "dm"){
        valorConvert = parseInt(valor) / 1
    } else if (unidadeDois == "m"){
        valorConvert = parseInt(valor) / 10
    } else if (unidadeDois == "km"){
        valorConvert = parseInt(valor) / 100
    }
}
else if (unidadeUm == "m"){
    if (unidadeDois == "cm"){
        valorConvert = parseInt(valor) * 100
    } else if (unidadeDois == "dm"){
        valorConvert = parseInt(valor) * 10
    } else if (unidadeDois == "m"){
        valorConvert = parseInt(valor) / 1
    } else if (unidadeDois == "km"){
        valorConvert = parseInt(valor) / 10
    }
}
else if (unidadeUm == "km"){
    if (unidadeDois == "cm"){
        valorConvert = parseInt(valor) * 1000
    } else if (unidadeDois == "dm"){
        valorConvert = parseInt(valor) * 100
    } else if (unidadeDois == "m"){
        valorConvert = parseInt(valor) * 10
    } else if (unidadeDois == "km"){
        valorConvert = parseInt(valor) / 1
    }
}
document.getElementById("valorConvertido").innerText = "Valor Convertido: " + valorConvert