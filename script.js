let formulario = document.querySelector("#calculadora")
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(event)
    
    let valorDoBem = event.target.valorDoBem.value
    let valorDeEntrada = event.target.valorDeEntrada.value
    let numeroDeParcelas = event.target.numeroDeParcelas.value
    let taxaDeJuros = event.target.taxaDeJuros.value / 100
    
    let valorFinanciado = valorDoBem - valorDeEntrada

    let divValorFinanciado = document.querySelector("#valor-financiado")
    divValorFinanciado.textContent = "R$ " + valorFinanciado

    let montante = valorFinanciado * Math.pow(1 + taxaDeJuros, numeroDeParcelas) 

    let valorDaParcela = montante / numeroDeParcelas
    let valorDaParcelaArredondado = valorDaParcela.toFixed(2)

    document.querySelector("#valor-parcela").textContent = "R$ " + valorDaParcelaArredondado
    
})

document.querySelector("#valorDoBem").addEventListener("keyup", function(event) {
    console.log(event.target.value)
    let valorDoBem = event.target.value.trim()
    let valorDeEntrada = document.querySelector("#valorDeEntrada").value.trim()
    if (valorDoBem == "" || valorDeEntrada == "") {
        return
    }

    let divValorFinanciado = document.querySelector("#valor-financiado")
    let valorFinanciadoFloat = parseFloat(valorDoBem) - parseFloat(valorDeEntrada)
    divValorFinanciado.textContent = "R$ " + valorFinanciadoFloat
})

document.querySelector("#valorDeEntrada").addEventListener("keyup", function(event) {
    console.log(event.target.value)
    let valorDeEntrada = event.target.value.trim()
    let valorDoBem = document.querySelector("#valorDoBem").value.trim()
    if (valorDoBem == "" || valorDeEntrada == "") {
        return
    }

    let divValorFinanciado = document.querySelector("#valor-financiado")
    let valorFinanciadoFloat = parseFloat(valorDoBem) - parseFloat(valorDeEntrada)
    divValorFinanciado.textContent = "R$ " + valorFinanciadoFloat
})