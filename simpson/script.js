function calcular() {
	var funcion = document.getElementById("funcion").value;
	var a = parseFloat(document.getElementById("a").value);
	var b = parseFloat(document.getElementById("b").value);
	var n = parseInt(document.getElementById("particiones").value);

	if (isNaN(a) || isNaN(b) || isNaN(n)) {
		alert("Por favor ingrese valores numéricos válidos.");
		return;
	}

	if (n <= 0) {
		alert("El número de particiones debe ser mayor que cero.");
		return;
	}

	if (n % 2 !== 0) {
		alert("El número de particiones debe ser par.");
		return;
	}

	var h = (b - a) / n;
	var datos = [];

	for (var i = 0; i <= n; i++) {
		var x = a + (i * h);
		var fx = eval(funcion);
		datos.push(fx);
	}

	var suma1 = 0;
	for (var i = 1; i < n; i += 2) {
		suma1 += datos[i];
	}

	var suma2 = 0;
	for (var i = 2; i < n; i += 2) {
		suma2 += datos[i];
	}

	var resultado = (h / 3) * (datos[0] + (4 * suma1) + (2 * suma2) + datos[n]);

	document.getElementById("resultado").innerHTML = "El resultado de la integración es: " + resultado.toFixed(4);

	var etiquetas = [];
	for (var i = 0; i <= n; i++) {
		etiquetas.push(i);
	}

	var contexto = document.getElementById("grafica").getContext("2d");
	var grafica = new Chart(contexto, {
		type: "line",
		data: {
			labels: etiquetas,
			datasets: [{
				label: "f(x)",
				data: datos,
				fill: false,
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}
