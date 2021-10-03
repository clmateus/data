// Arrays para classificar cada array dos métodos de data 
dia = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
mes = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

// É necessário a expecificação que será usada a propriedade Date
tempo = new Date;

// Variável responsável por selecionar os elementos HTML que sofrerão alterações
let h1 = document.getElementById("h1");

// Linha responsável por modificar os textos do HTML.
h1.innerHTML = tempo.getDate() + " de " + mes[tempo.getMonth()] + " de " + tempo.getFullYear();

// Relógio
function relogio(){
    var data = new Date();
    var hra = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    
    if(hra < 10){
        hra = "0" + hra;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(seg < 10){
        seg = "0" + seg;
    }
    
    let h2 = document.getElementById("hora");
    h2.innerHTML = hra + ":" + min + ":" + seg;
}

// Esse timer irá  irá chamar a função “relogio()” de um em um segundo.
var timer = setInterval(relogio, 1000);
