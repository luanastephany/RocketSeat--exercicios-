/*

C = (F - 32) * 5/9
F = (C * 9/5 + 32)

*/


function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C') //celsius é quando temos o C em maiúscula 
    const fahrenheitExists = degree.toUpperCase().includes('F') //fahrenheit é quando temos o F em maiúscula

    //fluxo de erro
    if (!celsiusExists && !fahrenheitExists) { //se não houver o C e nem o F
        throw new Error('Grau não identificado') //erro
    }

    //Fahrenheit para Celsius
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    //Celsius para Fahrenheit
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9 / 5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign //número concatenado com o C
}

try {
    console.log(transformDegree('36C'))
    console.log(transformDegree('50F'))
} catch (error) {
    console.log(error.message) //apenas pra falar que tem um erro, sem a descrição de linha, etc
}