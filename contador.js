function contar(){
    var inicio = document.getElementById('iinicio').value
    var fim = document.getElementById('ifim').value
    var passo = document.getElementById('ipasso').value
    var res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
       window.alert('[ERRO]')
        return
    }

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if (passo <= 0) {
        res.innerHTML = 'Passo inválido! Considerando PASSO 1'
        passo = 1
    }

    res.innerHTML = 'Contando: <br>'

    if (inicio < fim) {
        // Contagem crescente
        for (var c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} \u{1F449} `
        }
    } else {
        // Contagem decrescente
        for (var c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} \u{1F449} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}