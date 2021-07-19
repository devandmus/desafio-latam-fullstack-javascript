const domNumber = document.getElementById('number');
const domMessage = document.getElementById('message');

// Función para validar número
const validateNumber = num => {
  const response = {
    num: parseInt(num),
    isValid: false,
  };
  if (20 >= response.num && response.num >= 1)
    response.isValid = true;
  return response;
}

// Imprime multiplicaciones
const printMultiplicacion = num => {
  let multiplier = 1;
  do {
    console.log(`${multiplier} x ${num} = ${multiplier * num}`);
    multiplier++;
  } while (multiplier <= num)
}

// Imprime factoriales
const printFactorial = num => {
  let multiplier = 1;
  do {
    let factorial = 1
    for (let i = 1; i <= multiplier; i++) {
      factorial *= i;
    }
    console.log(`Factorial de ${multiplier} es: ${factorial}`);
    multiplier++;
  } while (multiplier <= num)
}

const runProgram = () => {
  const number = validateNumber(domNumber.value);
  const message = {
    text: '',
    type: '', // alert-success, alert-danger, alert-warning
    print() {
      domMessage.innerHTML = `<div class="mt-3 alert ${this.type}">${this.text}</div>`;
    }
  };
  if (!number.isValid) {
    if (isNaN(number.num)) {
      message.type = 'alert-warning';
      message.text = 'Ingresa un número';
    }
    else {
      message.type = 'alert-danger';
      message.text = `${number.num}: número fuera del rango. Debes elegir un número entre 1 y 20.`;
    }
  }
  else {
    message.type = 'alert-success';
    message.text = `Abre tu consola para visualizar las operaciones con el número ${number.num}.`;
    console.log('//// MULTIPLICACIONES ////');
    printMultiplicacion(number.num);
    console.log('//// FACTORIALES ////');
    printFactorial(number.num);
  }
  message.print();
}

document.getElementById('submitRunner').addEventListener('click', runProgram);

