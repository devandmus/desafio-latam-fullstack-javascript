// utils
const getNumber = (num, float=false) => {
  const number = float ? parseFloat(num) : parseInt(num);
  if (!isNaN(number)) return number
  alert('Número inválido');
  return false;
};

//////////////////////////////////////////
// Realizar operaciones con dos números //
//////////////////////////////////////////
const realizarOpDosNum = () => {
  // variables
  let num1;
  let num2;

// solicita número 1
  do {
    num1 = prompt('Ingresa un número entero mayor a 0 (obligatorio)');
    num1 = getNumber(num1);
    if (num1 <= 0) {
      num1 = false
      alert('El número debe ser mayor a 0')
    }
  } while (!num1);

  // solicita número 2
  do {
    num2 = prompt(`Ingresa un número entero mayor a 0 diferente del anterior (${ num1 }) (obligatorio)`);
    num2 = getNumber(num2);
    if (num1 <= 0) {
      num1 = false
      alert('El número debe ser mayor a 0')
    }
    // comprueba si son iguales, de ser así, solicita nuevamente
    if (num1 === num2) {
      num2 = false;
      alert(`No puede ser igual al anterior. Por favor, ingresa un número distinto de ${ num1 }`);
    }
  } while (!num2);

  alert(`
Operaciones solicitadas con ${ num1 } y ${ num2 }:
- Suma: ${ num1 + num2 }
- Resta: ${ num1 - num2 }
- División: ${ num1 / num2 }
- Multiplicación: ${ num1 * num2 }
- Módulo: ${ num1 % num2 }
  `);
}

//////////////////////////////////////////////
// Convertir Celsius a Kelvin y Fahrenheit  //
//////////////////////////////////////////////
const celsiusConvertion = () => {
  let num;
  do {
    num = prompt('Ingresa los grados celsius');
    num = getNumber(num, true);
  } while (!num);

  const kelvin = parseFloat(num + 273.15).toFixed(2);
  const fahrenheit = parseFloat((num * (9 /5 )) + 32).toFixed(2);

  alert(`
${ num }° Celsius equivalen a:
- Grados Kelvin: ${ kelvin }° K
- Grados Fahrenheit: ${ fahrenheit }° F
  `);
}

////////////////////////////////////////////////////////////////////////////
// cantidad de días y que muestre su equivalente en Años, Semanas y Días. //
////////////////////////////////////////////////////////////////////////////
const daysToYearWeekDay = () => {
  let num;
  do {
    num = prompt('Ingresa el número de días');
    num = getNumber(num);
  } while (!num);

  // algoritmo de años semanas y días
  const years = Math.floor(num / 365);
  const weeks = Math.floor((num - years * 365) / 7);
  const days = num - ((weeks * 7) + (years * 365));

  alert(`
${ num } días equivale a:
- ${ years } ${ years > 1 ? 'años': 'año' }
- ${ weeks } ${ weeks > 1 ? 'semanas': 'semana' }
- ${ days } ${days > 1 ? 'días' : 'día' } 
  `)
}

//////////////////////////////////////////////////////////
// solicite al usuario 5 números y realice los cálculos //
//////////////////////////////////////////////////////////
const fiveNumbers = () => {
  const numbers = [];
  do {
    num = prompt(`${ numbers.length + 1}. Ingresa un número entero`);
    num = getNumber(num, true);
    if (num) numbers.push(num);
  } while (numbers.length < 5);

  // suma de todos los números
  const addAll = numbers.reduce((a, b) => a + b);

  // El promedio de los 5 números ingresados
  const average = addAll / 5;

  alert(`
Con tus números ${ numbers.toString().replace(/,/g, ', ') }:
- La suma total: ${ addAll }
- El promedio: ${ average } 
  `)
}