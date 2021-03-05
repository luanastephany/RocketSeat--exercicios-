let family = {
    receitas: [8000, 3800, 1000], //o que está entrando de dinheiro
    despesas: [1550, 500, 250, 500, 235] //o que está saindo
}

function sum(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

//calcular qual o total de receitas e o total de despesas
function calculateBalance() {
    const calcularReceitas = sum(family.receitas)
    const calcularDespesas = sum(family.despesas)

    const total = calcularReceitas - calcularDespesas

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}R$`)
}

calculateBalance()