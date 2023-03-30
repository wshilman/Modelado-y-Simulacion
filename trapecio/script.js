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
  
	var h = (b - a) / n;
	var datos = [];
  
	for (var i = 0; i <= n; i++) {
	  var x = a + i * h;
	  var y = eval(funcion.replace(/x/g, x));
	  datos.push({x: x, y: y});
	}
  
	var area = 0;
  
	for (var i = 1; i < n; i++) {
	  area += eval(funcion.replace(/x/g, datos[i].x));
	}
  
	area = h * ((eval(funcion.replace(/x/g, a)) + eval(funcion.replace(/x/g, b))) / 2 + area);
  
	document.getElementById("resultado").innerHTML = "El resultado de la integral es: " + area.toFixed(4);
  
	var grafica = document.getElementById("grafica").getContext("2d");
  
	var datosGrafica = {
	  datasets: [{
		data: datos,
		label: funcion,
		backgroundColor: 'rgba(54, 162, 235, 0.2)',
		borderColor: 'rgba(54, 162, 235, 1)',
		borderWidth: 1,
		pointRadius: 0
	  }]
	};
  
	var opcionesGrafica = {
	  scales: {
		xAxes: [{
		  type: 'linear',
		  position: 'bottom',
		  ticks: {
			stepSize: h
		  }
		}]
	  }
	};
  
	var graficaTrapecio = new Chart(grafica, {
	  type: 'line',
	  data: datosGrafica,
	  options: opcionesGrafica
	});
  }
  