function calculate() {
  const functionString = document.getElementById('function').value;
  const iterations = document.getElementById('iterations').value;

  // Parse the function string to create a JavaScript function
  const func = new Function('x', `return ${functionString}`);

  // Calculate the integral using Monte Carlo method
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    const x = Math.random();
    sum += func(x);
  }
  const integral = sum / iterations;

  // Display the integral value
  const integralElement = document.createElement('p');
  integralElement.innerHTML = `El valor de la integral es: ${integral}`;
  document.body.appendChild(integralElement);

  // Create the plot
  const xValues = Array.from({ length: iterations }, (_, i) => i / iterations);
  const yValues = xValues.map(func);
  const trace = {
    x: xValues,
    y: yValues,
    mode: 'markers',
    marker: {
      color: 'blue',
      size: 3
    }
  };
  const layout = {
    title: 'Gráfico de la función',
    xaxis: {
      title: 'x'
    },
    yaxis: {
      title: 'y'
    }
  };
  Plotly.newPlot('plot', [trace], layout);
}