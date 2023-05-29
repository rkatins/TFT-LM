// Variables globales
var contadorSecciones = 2;

function fAleatorio() {
	var numeros = new Array(6);

	for (var i = 0; i < numeros.length; i++) {
		numeros[i] = Math.floor(Math.random() * 49) + 1;
	}

	return numeros;
}

function fBorrarContenidoEjemplo(input) {
	if (input.value == "Num1" || input.value == "Num2" || input.value == "Num3" || input.value == "Num4" || input.value == "Num5" || input.value == "Num6") {
		input.value = '';
	}
}

// En des-uso
function fIntroducidoErroneo(input) {
// 	var valorModificado = parseFloat(input.value);

// 	if (input.value == '' || valorModificado <= 0 || valorModificado >= 50) {
// 		input.style.backgroundColor = "#ff9999";
// 		input.style.boxShadow = "0 0 10px #ff9999, 0 0 20px #ff9999, 0 0 30px #ff0000";


// 	} else {
// 		input.style.backgroundColor = "white";
// 		input.style.boxShadow = '';
// 	}
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
	        '<div><input type="text" class="' + clase + '" placeholder="Num1" onblur="fIntroducidoErroneo(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num2" onblur="fIntroducidoErroneo(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num3" onblur="fIntroducidoErroneo(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num4" onblur="fIntroducidoErroneo(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num5" onblur="fIntroducidoErroneo(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num6" onblur="fIntroducidoErroneo(this)" style="display: inline-block"></div>' +
	        '<br><br>' +
	        '<button class="oval btnComprobar" onclick="btnComprobar(this)">COMPROBAR</button>';
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

function btnComprobar(boton) {
	alert("Rojo -> Numero incorrecto\nAmarillo -> Numero repetido o no se ha introducido valor alguno");
	// Obtener el id de la clase padre a la que pertenece el boton ejecutador de la funcion
	var claseContenedor = boton.parentNode.id;
	var sectionContenedor = document.getElementById(claseContenedor);
	var etiquetasHijas = Array.from(sectionContenedor.getElementsByTagName('input'));

	for (var i = 0; i < etiquetasHijas.length; i++) {
		console.log("valor de " + i + "-> " + parseInt(etiquetasHijas[i].value));

		if (isNaN(parseInt(etiquetasHijas[i].value))) {
			console.log("Valor mo valido");

			etiquetasHijas[i].style.backgroundColor = "#f5d742";
			etiquetasHijas[i].style.boxShadow = "0 0 10px #f5d742, 0 0 20px #f5d742, 0 0 30px #ff0000";
		} else 	if (etiquetasHijas[i].value == '' || parseInt(etiquetasHijas[i].value) <= 0 || parseInt(etiquetasHijas[i].value) >= 50) {
			etiquetasHijas[i].style.backgroundColor = "#ff9999";
			etiquetasHijas[i].style.boxShadow = "0 0 10px #ff9999, 0 0 20px #ff9999, 0 0 30px #ff0000";


		} else {
			etiquetasHijas[i].style.backgroundColor = "white";
			etiquetasHijas[i].style.boxShadow = '';
		}
	}
}