var notaUm, notaDois, notaTres, notaQuatro, media
notaUm = prompt("Informe a nota do 1º Bimestre: ")
notaDois = prompt("Informe a nota do 2º Bimestre: ")
notaTres = prompt("Informe a nota do 3º Bimestre: ")
notaQuatro = prompt("Informe a nota do 4º Bimestre: ")

parseInt(notaUm)

media = (parseInt(notaUm) + parseInt(notaDois) + parseInt(notaTres) + parseInt(notaQuatro)) / 4
document.getElementById("media").innerText = "A sua média é " + media
