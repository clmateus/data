// Arrays para classificar cada array dos métodos de data 
dia = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
mes = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

// É necessário a expecificação que será usada a propriedade Date
agora = new Date;

// Essa variável será responsável por selecionar o elemento HTML que sofrerá alterações
let h1 = document.getElementById("h1");

// Essa linha é responsável por modificar o texto do HTML.
h1.innerHTML = agora.getDate() + " de " + mes[agora.getMonth()] + " de " + agora.getFullYear();