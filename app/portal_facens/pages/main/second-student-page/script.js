
const listaMeses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const dataAtual = new Date();
let mesAtual = listaMeses[dataAtual.getMonth()];
let anoAtual = dataAtual.getFullYear();

document.getElementById("currentMonthLabel").innerHTML = mesAtual;
document.getElementById("currentYearLabel").innerHTML = anoAtual;