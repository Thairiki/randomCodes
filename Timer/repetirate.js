function repetirAte(){
    var timer = document.getElementById("campoLimite").value //Retorna o valor inserido no campo.
    document.getElementById("timer").innerHTML = timer + " segundos."

    interval = setInterval(() => {
        timer--
        document.getElementById("timer").innerHTML = timer + " segundos."
        if (timer==0) {clearInterval(interval)}
    }, 1000) //Diminui 1 do valor do tempo limite a cada 1 segundo.
}