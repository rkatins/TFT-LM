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

function fIntroducidoErroneo(input) {
	var valorModificado = parseFloat(input.value);

	if (input.value == '' || valorModificado <= 0 || valorModificado >= 50) {
		input.style.backgroundColor = "#ff9999";
		input.style.boxShadow = "0 0 10px #ff9999, 0 0 20px #ff9999, 0 0 30px #ff0000";
	} else {
		input.style.backgroundColor = "white";
		input.style.boxShadow = '';
	}
}

function fComprobarRepetidos(input) {
	var valores = new Array;

	var elementoMIN = 0;
	var elementoMAX = 0;

	// Convertir el ID a un número entero, en base 10
	var id = parseInt(input.id, 10);

	if (1 >= id && id <= 6) {
		elementoMIN = 1;
		elementoMAX = 6;
	} else if (7 >= id && id <= 12) {
		elementoMIN = 7;
		elementoMAX = 12;
	} else if (13 >= id && id <= 18) {
		elementoMIN = 13;
		elementoMAX = 18;
	} else if (19 >= id && id <= 24) {
		elementoMIN = 19;
		elementoMAX = 24;
	} else if (25 >= id && id <= 30) {
		elementoMIN = 25;
		elementoMAX = 30;
	} else if (31 >= id && id <= 36) {
		elementoMIN = 31;
		elementoMAX = 36;
	}

	for (var i = elementoMIN; i <= elementoMAX; i++) {
		var valor = document.getElementById(i).value;			
		
		if (isNaN(valor)) {
			valores[i] = 0;
		} else {
			// Agregar el valor al array
			valores.push(valor);
		}
	}

	if (valores.includes(input.value)) {
		alert("Valor ya escrito en la apuesta");
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
	        '<h1 class="tituloApuesta">APUESTA ' + contadorSecciones + '</h1>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num1" onblur="fIntroducidoErroneo(this); fComprobarRepetidos(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num2" onblur="fIntroducidoErroneo(this); fComprobarRepetidos(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num3" onblur="fIntroducidoErroneo(this); fComprobarRepetidos(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num4" onblur="fIntroducidoErroneo(this); fComprobarRepetidos(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num5" onblur="fIntroducidoErroneo(this); fComprobarRepetidos(this)" style="display: inline-block"></div>' +
	        '<div><input type="text" class="' + clase + '" placeholder="Num6" onblur="fIntroducidoErroneo(this); fComprobarRepetidos(this)" style="display: inline-block"></div>';

	    // Agregar el nuevo elemento al elemento padre (apuestaElement)
	    apuestaElement.appendChild(nuevaTAG);

	    contadorSecciones++;
	}

	var etiquetaExiste = document.getElementById('minus');
	if (contadorSecciones >= 3 && etiquetaExiste == null) {
		var botones = document.getElementById('buttons');

		// Crear un nuevo elemento button en la etiqueta con id = buttons
		var nuevaTAG = document.createElement("button");
		// Agregar atributos a la etiqueta creada previmente
		nuevaTAG.setAttribute("id", "minus");
		nuevaTAG.setAttribute("onClick", "fQuitar(); fComprobarEliminarMINUS()");
		// Cambiar el contenido, no su atributo value
		nuevaTAG.innerText = "-";

		botones.appendChild(nuevaTAG);
	}
}

function fQuitar() {
	var id = "seccion" + (contadorSecciones - 1);
	var seccion = document.getElementById(id);

	if (contadorSecciones != 2) {
		seccion.remove();

		contadorSecciones--;
	}
}

function fComprobarEliminarADD() {
  var buttonADD = document.getElementById('add');

  if (contadorSecciones == 7) {
    buttonADD.remove();
  }
}

function fComprobarEliminarMINUS() {
  var buttonMINUS = document.getElementById('minus');

  if (contadorSecciones == 2) {
    buttonMINUS.remove();
  }
}
