function plot() {
  // Obtener los valores del formulario
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let func = document.getElementById("func").value;
  let n = parseInt(document.getElementById("n").value);

  // Calcular los valores de la integral de Monte Carlo
  let x = [];
  let y = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let xi = Math.random() * (b - a) + a;
    let fi = eval(func.replace(/x/g, xi));
    sum += fi;
    let yi = sum / (i + 1) * (b - a);
    x.push(i);
    y.push(yi);
  }

  // Graficar los valores en un gráfico de línea
  let data = [{ x: x, y: y, type: "line" }];
  Plotly.newPlot("plot", data);
}
