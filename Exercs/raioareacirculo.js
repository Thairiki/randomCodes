var diametro, raio, area
alert("Cálcular o Raio e Área de um círculo.")
diametro = prompt("Informe o diametro do círculo para a realização dos cálculos: ")

raio = parseInt(diametro) / 2
area = Math.PI * Math.pow(raio, 2)

document.getElementById("resultado").innerText = "O raio do círculo é " + raio + " e sua área é " + area