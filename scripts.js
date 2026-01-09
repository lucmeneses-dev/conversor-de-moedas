const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelector = document.querySelector(".currency-selector");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value"); // Valor das outras moedas

    const taxas = {
        real: {dolar: 0.19, euro: 0.16, libra: 0.14, bitcoin: 0.0000020},
        dolar: {real: 5.39, euro: 0.86, libra: 0.74, bitcoin: 0.000011},
        euro: {real: 6.28, dolar: 1.17, libra: 0.87, bitcoin: 0.000013},
        libra: {real: 7.24, dolar: 1.34, euro: 1.15, bitcoin: 0.000015},
        bitcoin: {real: 490608.49, dolar: 91042.68, euro: 78101.46, libra: 67763.97}
    }

    const moedaOrigem = currencySelector.value
    const moedaDestino = currencySelect.value

  // Mostrar valor de origem formatado
    currencyValueToConvert.innerHTML = formatarMoeda(
    inputCurrencyValue,
    moedaOrigem
  )

  // Se forem iguais, não converte
    if (moedaOrigem === moedaDestino) {
    currencyValueConverted.innerHTML = formatarMoeda(
      inputCurrencyValue,
      moedaDestino
    )
    return
  }

  // Conversão usando o objeto taxas
  const valorConvertido =
    inputCurrencyValue * taxas[moedaOrigem][moedaDestino]

  currencyValueConverted.innerHTML = formatarMoeda(
    valorConvertido,
    moedaDestino
  )
}
    
function formatarMoeda(valor, moeda) {
  const formatos = {
    real: { locale: "pt-BR", currency: "BRL" },
    dolar: { locale: "en-US", currency: "USD" },
    euro: { locale: "de-DE", currency: "EUR" },
    libra: { locale: "en-GB", currency: "GBP" },
    bitcoin: { locale: "en-US", currency: "BTC" }
  }

  return new Intl.NumberFormat(
    formatos[moeda].locale,
    {
      style: "currency",
      currency: formatos[moeda].currency,
      maximumFractionDigits: moeda === "bitcoin" ? 8 : 2
    }
  ).format(valor)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if(currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value === "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    convertValues();
}

function changeCurrencytwo(){
    const currencyNameTwo = document.getElementById("currency-name-two");
    const currencyImageTwo = document.querySelector(".currency-img-two");

    if(currencySelector.value === "dolar") {
        currencyNameTwo.innerHTML = "Dólar americano"
        currencyImageTwo.src = "./assets/dolar.png"
    }

    if(currencySelector.value === "euro") {
        currencyNameTwo.innerHTML = "Euro"
        currencyImageTwo.src = "./assets/euro.png"
    }

    if(currencySelector.value === "libra") {
        currencyNameTwo.innerHTML = "Libra"
        currencyImageTwo.src = "./assets/libra.png"
    }

    if(currencySelector.value === "bitcoin") {
        currencyNameTwo.innerHTML = "Bitcoin"
        currencyImageTwo.src = "./assets/bitcoin.png"
    }

    if(currencySelector.value === "real") {
        currencyNameTwo.innerHTML = "Real Brasileiro"
        currencyImageTwo.src = "./assets/real.png"
    }
    convertValues();
}

currencySelect.addEventListener("change", changeCurrency)
currencySelector.addEventListener("change", changeCurrencytwo)
convertButton.addEventListener("click", convertValues)

