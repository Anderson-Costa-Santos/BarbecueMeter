
let inputAdultos = document.getElementById("adults");
let inputCriancas = document.getElementById("kids");
let inputBebem = document.getElementById("drinkers");
let inputDuracao = document.getElementById("duration");

let resultado = document.getElementById("result");


function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let bebem = inputBebem.value;

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * bebem;
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);
    resultado.innerHTML = `<h2 class="result-text">Você precisará de:</h2>`
    resultado.innerHTML += `
    <div class="result-style">
    <img src="./images/streamline-icon-food-steak@25x25.PNG"/>
     <p>${quantidadeTotalCarne / 1000} Kg de Carne</p>
    </div>`
    resultado.innerHTML += `
    <div class="result-style">
    <img src="./images/streamline-icon-food-drinks-beer-mug@25x25.PNG"/>
    <p>${quantidadeTotalCerveja / 350} latas de cerveja 350ml</p>
    </div>`
    resultado.innerHTML += `
    <div class="result-style">
    <img src="./images/streamline-icon-food-drinks-wine-bottle@25x25.PNG"/>
    <p>${quantidadeTotalBebidas / 1000} L de Bebidas (água /refrigerante)</p>
    </div>`

}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 7700;
    } else {
        return 4200;
    }

}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }

}

function onOver(elemento){
 
    elemento.style.backgroundColor = "black";
}

function onOut(elemento){
 
    elemento.style.backgroundColor = "rgba(24, 2, 2, 0.267)";
}