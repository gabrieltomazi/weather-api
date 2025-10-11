
let chave = "8eca2540b9c448a8a2d184036251110"

function colocaNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.location.name}`
    document.querySelector(".temp").innerHTML = `${dados.current.temp_c}°C`
    document.querySelector(".description").innerHTML = `${dados.current.condition.text}` 
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.current.humidity}%`
    document.querySelector(".icon").src = `${dados.current.condition.icon}`
    // 
}


async function buscarCidade(cidade) {
    let dados = await fetch(`https://api.weatherapi.com/v1/current.json?key=${chave}&q=${cidade}&aqi=yes&lang=pt&units=metrics`).then(resposta => resposta.json())
    colocaNaTela(dados)
}


function cliqueiNoBotao() {
    let cidade = document.querySelector("#input-cidade").value
    buscarCidade(cidade)
}


buscarCidade('Criciúma')