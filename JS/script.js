// Variables globales
var contadorSecciones = 2;

function fAleatorio() {
	var nAleatorios = new Array(6);

	for (var i = 0; i < nAleatorios.length; i++) {
		nAleatorios[i] = Math.floor(Math.random() * 49) + 1;
	}

	return nAleatorios;
}

function fBorrarContenido(input) {
	var valorModificado = parseFloat(input.value);

	if (valorModificado <= 0 || valorModificado >= 50 || isNaN(valorModificado)) {
		input.style.backgroundColor = "white";
		input.style.boxShadow = '';
	}
}


function fAgnadir() {
	var apuestaElement = document.getElementById("apuesta");

  	// Crear un nuevo elemento div para el contenido
	var nuevaTAG = document.createElement("section");
	// Agregar la clase al nuevo elemento
	nuevaTAG.setAttribute("id", "seccion" + contadorSecciones);

	if (contadorSecciones <= 6) {
	    var clase = "oval apuesta" + contadorSecciones;

	    nuevaTAG.innerHTML +=
	    	'<hr class="horizontal">'+
	        '<h1 class="tituloApuesta">APUESTA ' + contadorSecciones + '</h1>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num1" onclick="fBorrarContenido(this)"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num2" onclick="fBorrarContenido(this)"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num3" onclick="fBorrarContenido(this)"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num4" onclick="fBorrarContenido(this)"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num5" onclick="fBorrarContenido(this)"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num6" onclick="fBorrarContenido(this)"></div>' +
	        '<br><br>' +
	        '<button class="oval btnComprobar" onclick="btnComprobar(this)">COMPROBAR</button>' +
	        '<p id="aleatorios' + contadorSecciones + '"></p>';
	    // Agregar el nuevo elemento al elemento padre (apuestaElement)
	    apuestaElement.appendChild(nuevaTAG);

	    contadorSecciones++;
	}

	var etiquetaExiste = document.getElementById('minus');
	if (contadorSecciones >= 3 && etiquetaExiste == null) {
		var contenedoBTN = document.getElementById('buttons');

		// Crear un nuevo elemento button en la etiqueta con id = buttons
		var nuevaTAG = document.createElement("button");
		// Agregar atributos a la etiqueta creada previmente
		nuevaTAG.setAttribute("id", "minus");
		nuevaTAG.setAttribute("onClick", "fQuitar(); fComprobarEliminarMINUS()");
		// Cambiar el contenido, no su atributo value
		nuevaTAG.innerText = "-";

		contenedoBTN.appendChild(nuevaTAG);
	}
}

function fQuitar() {
	var id = "seccion" + (contadorSecciones - 1);
	var seccion = document.getElementById(id);

	if (contadorSecciones != 2) {
		seccion.remove();

		contadorSecciones--;
	}

	var etiquetaExiste = document.getElementById('add');
	if (contadorSecciones >= 2 && etiquetaExiste == null) {
		var contenedoBTN = document.getElementById('buttons');

		// Crear un nuevo elemento button en la etiqueta con id = buttons
		var nuevaTAG = document.createElement("button");
		// Agregar atributos a la etiqueta creada previmente
		nuevaTAG.setAttribute("id", "add");
		nuevaTAG.setAttribute("onClick", "fAgnadir(); fComprobarEliminarADD()");
		// Cambiar el contenido, no su atributo value
		nuevaTAG.innerText = "+";

		contenedoBTN.appendChild(nuevaTAG);
	}
}

function fComprobarEliminarADD(boton) {
	var buttonADD = document.getElementById('add');

	if (contadorSecciones == 7) {
		buttonADD.remove();
	}
}

function fComprobarEliminarMINUS(boton) {
	var buttonMINUS = document.getElementById('minus');
	// var buttonMINUS = boton.id; NO FUNCIONA

	if (contadorSecciones == 2 || contadorSecciones == 6) {
		buttonMINUS.remove();
	}

	var etiquetaExiste = document.getElementById('minus');
	if (contadorSecciones == 6 && etiquetaExiste == null) {
		var contenedoBTN = document.getElementById('buttons');

		// Crear un nuevo elemento button en la etiqueta con id = buttons
		var nuevaTAG = document.createElement("button");
		// Agregar atributos a la etiqueta creada previmente
		nuevaTAG.setAttribute("id", "minus");
		nuevaTAG.setAttribute("onClick", "fQuitar(); fComprobarEliminarMINUS()");
		// Cambiar el contenido, no su atributo value
		nuevaTAG.innerText = "-";

		contenedoBTN.appendChild(nuevaTAG);
	}
}

var nAleatorios = new Array(6);
function btnComprobar(boton) {
	alert("Rojo -> Numero incorrecto\nAmarillo -> Numero repetido o no se ha introducido valor alguno\nVerde -> Numero en la lista");
	
	
	nAleatorios = fAleatorio();
	
	// Obtener el id de la clase padre a la que pertenece el boton ejecutador de la funcion
	var claseContenedor = boton.parentNode.id;
	var sectionContenedor = document.getElementById(claseContenedor);
	var etiquetasHijas = Array.from(sectionContenedor.getElementsByTagName('input'));

	for (var i = 0; i < etiquetasHijas.length; i++) {
		console.log("valor de " + i + "-> " + parseInt(etiquetasHijas[i].value));

		if (isNaN(parseInt(etiquetasHijas[i].value))) {
			etiquetasHijas[i].style.backgroundColor = "#f5d742";
			etiquetasHijas[i].style.boxShadow = "0 0 10px #f5d742, 0 0 20px #f5d742, 0 0 30px #ff0000";
		} else 	if (etiquetasHijas[i].value == '' || parseInt(etiquetasHijas[i].value) <= 0 || parseInt(etiquetasHijas[i].value) >= 50) {
			etiquetasHijas[i].style.backgroundColor = "#ff9999";
			etiquetasHijas[i].style.boxShadow = "0 0 10px #ff9999, 0 0 20px #ff9999, 0 0 30px #ffffff";
		} else if (parseInt(etiquetasHijas[i].value) <= 1 || parseInt(etiquetasHijas[i].value) <= 49) {
			etiquetasHijas[i].style.backgroundColor = "#79e630";
			etiquetasHijas[i].style.boxShadow = "0 0 10px #79e630, 0 0 20px #79e630, 0 0 30px #ffffff";
		}
	}
}