dia = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
mes = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

agora = new Date;

let h1 = document.getElementById("h1");
h1.innerHTML = agora.getDate() + " de " + mes[agora.getMonth()] + " de " + agora.getFullYear();