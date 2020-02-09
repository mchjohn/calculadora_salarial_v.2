function calcular() {
    let salarioBrutoTxt = document.getElementById('salario').value
    let salarioBruto = parseFloat(salarioBrutoTxt)

    let jornadaTxt = document.getElementById('jornada').value
    let jornada = parseFloat(jornadaTxt)

    if(jornada < 1) {
        jornada = 1
    }

    let qtdExtra50Txt = document.getElementById('extra50').value
    let qtdExtra50 = parseFloat(qtdExtra50Txt)

    let qtdExtra100Txt = document.getElementById('extra100').value
    let qtdExtra100 = parseFloat(qtdExtra100Txt)

    let valorHora = salarioBruto / jornada
    let valorHora50 = valorHora + (valorHora * 0.5)
    let valorHora100 = valorHora + (valorHora * 1)

    let totalExtra50 = valorHora50 * qtdExtra50
    let totalExtra100 = valorHora100 * qtdExtra100

    let totalBrutoExtra = totalExtra50 + totalExtra100

    let salarioBrutoComExtras = salarioBruto + totalBrutoExtra

    // calculos do INSS
    let inss = 0
    let aliquotaInss = ''

    if (salarioBrutoComExtras < 1045) {
        inss = salarioBrutoComExtras * 0.075
        aliquotaInss = '(alíquota 7.5%)'
    } else if (salarioBrutoComExtras > 1045 && salarioBrutoComExtras <= 2089.6) {
        inss = salarioBrutoComExtras * 0.09
        aliquotaInss = '(alíquota 9%)'
    } else if (salarioBrutoComExtras > 2089.6 && salarioBrutoComExtras <= 3134.4) {
        inss = salarioBrutoComExtras * 0.12
        aliquotaInss = '(alíquota 12%)'
    } else if (salarioBrutoComExtras > 3134.4 && salarioBrutoComExtras <= 6101.06) {
        inss = salarioBrutoComExtras * 0.14
        aliquotaInss = '(alíquota 14%)'
    } else if (salarioBrutoComExtras > 6101.06 && salarioBrutoComExtras <= 10448) {
        inss = salarioBrutoComExtras * 0.145
        aliquotaInss = '(alíquota 14.5%)'
    } else if (salarioBrutoComExtras > 10448 && salarioBrutoComExtras <= 20896) {
        inss = salarioBrutoComExtras * 0.165
        aliquotaInss = '(alíquota 16.5%)'
    } else if (salarioBrutoComExtras > 20896 && salarioBrutoComExtras <= 40747.20) {
        inss = salarioBrutoComExtras * 0.19
        aliquotaInss = '(alíquota 19%)'
    } else if (salarioBrutoComExtras > 40747.20) {
        inss = salarioBrutoComExtras * 0.22
        aliquotaInss = '(alíquota 22%)'
    }
    // calculos do INSS

    let salarioDiscontoInss = salarioBrutoComExtras - inss

    // calculos do IRPF
    let irpf = 0
    let aliquotaIrpf = ''

    if (salarioDiscontoInss >= 1903.99 && salarioDiscontoInss <= 2826.65) {
        irpf = salarioDiscontoInss * 0.075 - 142.80
        aliquotaIrpf = '(alíquota 7.5%)'
    } else if (salarioDiscontoInss >= 2826.66 && salarioDiscontoInss <= 3751.05) {
        irpf = salarioDiscontoInss * 0.15 - 354.80
        aliquotaIrpf = '(alíquota 15%)'
    } else if (salarioDiscontoInss >= 3751.06 && salarioDiscontoInss <= 4664.68) {
        irpf = salarioDiscontoInss * 0.225 - 636.13
        aliquotaIrpf = '(alíquota 22.5%)'
    } else if (salarioDiscontoInss > 4664.68) {
        irpf = salarioDiscontoInss * 0.275 - 869.36
        aliquotaIrpf = '(alíquota 27.6%)'
    }
    // calculos do IRPF

    let salarioLiquido = salarioDiscontoInss - irpf

    document.querySelector('div#salarioHora > .valor').innerHTML = valorHora.toFixed(2)
    document.querySelector('div#salarioExtra50 > .valor').innerHTML = valorHora50.toFixed(2)
    document.querySelector('div#salarioExtra100 > .valor').innerHTML = valorHora100.toFixed(2)
    document.querySelector('div#totalExtra50 > .valor').innerHTML = totalExtra50.toFixed(2)
    document.querySelector('div#totalExtra100 > .valor').innerHTML = totalExtra100.toFixed(2)
    document.querySelector('div#totalExtras > .valor').innerHTML = totalBrutoExtra.toFixed(2)
    document.querySelector('div#salarioBruto > .valor').innerHTML = salarioBrutoComExtras.toFixed(2)
    document.querySelector('div#resInss > .valor').innerHTML = inss.toFixed(2)
    document.querySelector('div#resIrpf > .valor').innerHTML = irpf.toFixed(2)
    document.querySelector('div#salarioLiquido > .valor').innerHTML = salarioLiquido.toFixed(2)

    document.querySelector('.inss').innerHTML = aliquotaInss
    document.querySelector('.irpf').innerHTML = aliquotaIrpf
}