var disminuir = document.getElementById("menorar");
var aumentar = document.getElementById("aumentar");
disminuir.hidden=true;

function aumentarLetra() {
	disminuir.hidden=false;
	aumentar.hidden=true;
	document.getElementById("contenido").classList.add("textoAumentado");
}

function disminuirLetra() {
	disminuir.hidden=true;
	aumentar.hidden=false;
	document.getElementById("contenido").classList.add("textoMenorado");
}


