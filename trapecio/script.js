function limpiar() {
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("iteraciones").value = "";
	document.getElementById("funcion").value = "";
  }
  
  function trapecio() {
	let a = parseFloat(document.getElementById("a").value);
	let b = parseFloat(document.getElementById("b").value);
	let n = parseFloat(document.getElementById("iteraciones").value);
	let funcion = document.getElementById("funcion").value;
  
	let h = (b - a) / n;
	let x = a;
	let suma = 0;
  
	for (let i = 1; i < n; i++) {
	  x += h;
	  suma += eval(funcion);
	}
  
	let resultado = h / 2 * (eval(funcion) + 2 * suma + eval(funcion.replace(/x/g, b)));
  
	let puntosX = [a];
	let puntosY = [eval(funcion.replace(/x/g, a))];
  
	for (let i = 1; i <= n; i++) {
	  puntosX.push(a + i * h);
	  puntosY.push(eval(funcion.replace(/x/g, a + i * h)));
	}
  
	puntosX.push(b);
	puntosY.push(eval(funcion.replace(/x/g, b)));
  
	let trace = {
	  x: puntosX,
	  y: puntosY,
	  type: "scatter"
	};
  
	let data = [trace];
  
	let layout = {
	  title: "Grafica de la Funcion",
	  xaxis: {
		title: "x"
	  },
	  yaxis: {
		title: "y"
	  }
	};
  
	Plotly.newPlot("grafica", data, layout);
  
	document.getElementById("resultado").innerHTML = "El resultado de la integral es: " + resultado.toFixed(6);
  }
  
  