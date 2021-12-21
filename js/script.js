var disminuir = document.getElementById("menorar");
var aumentar = document.getElementById("aumentar");
disminuir.hidden=true;

function aumentarLetra() {
	disminuir.hidden=false;
	aumentar.hidden=true;
	document.getElementById("contenidopq").classList.add("textoAumentado");
}

function disminuirLetra() {
	disminuir.hidden=true;
	aumentar.hidden=false;
	document.getElementById("contenidopq").classList.add("textoMenorado");
}


