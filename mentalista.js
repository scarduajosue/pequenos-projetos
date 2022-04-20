var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute) {
        document.write("<h2>Acertou</h2>")
        break
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor")
        tentativas = tentativas - 1
    } else if (chute < numeroSecreto) {
        alert("O número de secreto é maior")
        tentativas = tentativas - 1
    }
}

if (chute != numeroSecreto) {
    document.write("<h2>O número secreto era </h2>" + numeroSecreto)
}
