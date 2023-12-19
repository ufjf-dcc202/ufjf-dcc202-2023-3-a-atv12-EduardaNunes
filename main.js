import { getEstoque, limpaEstoque, transacaoNoEstoque } from "./estoque.js"

document.entrada.addEventListener('submit', leFormulario);

const olJoao = document.querySelector('#olJoao');
const olMaria = document.querySelector('#olMaria');

function leFormulario(event){
    event.preventDefault();

    const fruta = document.entrada.fruta.value
    const quantidade = document.entrada.quantidade.valueAsNumber
    const origem = document.entrada.origem.value
    const destino = document.entrada.destino.value

    console.log(`fruta: ${fruta} qtd: ${quantidade}`);
}