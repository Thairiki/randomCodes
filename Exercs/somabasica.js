var valorUm, valorDois, resultado

valorUm = prompt("Informe o primeiro valor: ")
valorDois = prompt("Informe o segundo valor: ")

resultado = parseInt(valorUm) + parseInt(valorDois)

document.getElementById("soma").innerText = "A soma dos valores é " + resultado