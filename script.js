/*
    velocidade máxina de até 70
    a cada 5km acima do limite você perde 1 ponto
    caso pontos maior que 12 = "carteira suspensa"
*/


function verificar() {
    let txtVerficar = document.getElementById('txtnum').value
    let resultado = document.getElementById('resultado')

    if(txtVerficar == '') {
        resultado.innerHTML = `Velocidade não encontrada`
    } else if(txtVerficar <= 70) {
        resultado.innerHTML = `Velocidade <strong>${txtVerficar}KM/H</strong>. <br> Dirija com Cuidado!`
    } else {
        const pontos = Math.floor(((txtVerficar - 70) / 5))
        if(pontos >= 12) {
            resultado.innerHTML = `Você está a <strong>${txtVerficar}KM/H</strong>. <br> Sua Carteira foi <strong>SUSPENSA</strong>! Procure o DETRAN de sua Cidade`
        } else {
            resultado.innerHTML = `Cuidado!<br> Você está a <strong>${txtVerficar}KM/H</strong>. <br> Acabou de perder <strong>${pontos}</strong> Pontos.`
        }
    }
}

function limpar() {
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = ''
}