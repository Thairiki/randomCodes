function acaoBotao() {
    var numero, fatorial
    numero = prompt("Digite o número para o cálculo de fatorização:")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador        
    }
document.getElementById("calculo").innerText = "O fatorial do número " + numero + " é " + fatorial
}