const _app = {
  name: {
    target: document.querySelector('#name'),
    first_name: null,
    last_name: null,
  },
  course: {
    target: document.querySelector('#course'),
    value: 'null',
  },
  scores: {
    target: document.querySelector('#score_matrix'),
    values: []
  },
}

// Get name
do {
  const res = prompt('Escribe tu nombre por favor (obligatorio)');
  if (res !== '') _app.name.first_name = res;
} while (_app.name.first_name === null);

do {
  const res = prompt('Escribe tu apellido por favor (obligatorio)');
  if (res !== '') {
    _app.name.last_name = res;
    _app.name.target.innerHTML = `${_app.name.first_name} ${_app.name.last_name}`;
  }
} while (_app.name.last_name === null);

// Get course
do {
  const res = prompt('Indícanos tu carrera (obligatorio)');
  if (res !== '') {
    _app.course.value = res;
    _app.course.target.innerHTML = res;
  }
} while (_app.course.value === null);

// Get scores
do {
  const len = _app.scores.values.length;
  const cycle = parseInt(len / 3);
  const counter = len + 1 - (3 * cycle);
  const courses = [..._app.scores.target
    .querySelectorAll('tr')]
    .map(tr => tr.querySelector('td > strong').textContent);

  const currentCourse = courses[cycle];
  const res = prompt(`Ingrese nota ${ counter } [${ currentCourse }]`);

  if (res !== '') {
    const number = parseInt(res);
    if (isNaN(number)) alert('Ingresa un número válido');
    else if (number < 0 || number > 7) alert('Tu nota debe estar entre 0 y 7');
    else {
      _app.scores.values.push(number);
      const row = _app.scores.target
        .querySelector(`tr:nth-of-type(${ cycle + 1 })`);

      row
        .querySelector(`td:nth-of-type(${ counter + 1 })`)
        .innerHTML = res;

      if (counter === 3) row
        .querySelector('td:last-of-type')
        .innerHTML = parseFloat(
          (
            _app.scores.values[len - 2]
            + _app.scores.values[len - 1]
            + _app.scores.values[len]
          ) / 3
        ).toFixed(2)
    }
  }
} while (_app.scores.values.length < 8);

// Last message
if (_app.scores.values.length === 8) {
  const arr = _app.scores.values;
  const len = _app.scores.values.length - 1;
  const average = parseFloat((arr[len - 1] + arr[len]) / 3).toFixed(2);
  const minimumScore = (4 - average) * 3;
  document.querySelector('#footer_message').innerHTML = `
    Para aprobar el ramo Javascript con nota 4, necesitas obtener un ${ minimumScore } en la nota 3.
    ${ minimumScore > 7 ? '<br />Como es imposible, no podrás aprobar el módulo... Cuek!' : ''}
  `;
}

