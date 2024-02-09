const factInput = document.getElementById('fact-input');
let resultado = document.getElementById('resultado');

function calcularFactorial() {
  const numFactorial = factInput.value;

  if (isNaN(numFactorial)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  const numConvertido = Number(numFactorial);

  let factorial = 1;
  for (let i = 1; i <= numConvertido; i++) {
    factorial *= i;
  }

  resultado.innerHTML = `El factorial de ${numConvertido} es: ${factorial}`;
}
