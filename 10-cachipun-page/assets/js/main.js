const Game = {
  matches: 0,
  currentMatch: 0,
  hackerman: 0,
  player: 0,
  empate: 0,
  time1: null,
  time2: null,

  showDOM(selector) {
    document.querySelector(selector).classList.remove('d-none');
  },

  removeDOM(selector) {
    document.querySelector(selector).classList.add('d-none');
  },

  setRock() {
    this.playWith(0);
  },

  setPaper() {
    this.playWith(1);
  },

  setScissors() {
    this.playWith(2);
  },

  start() {
    do {
      const val = parseInt(prompt('¿En cuantas partidas deseas probar tu valor contra la máquina?'));
      if (isNaN(val)) alert('Elige un número válido');
      else if (val <= 0) alert('Elige un número mayor a 0');
      else this.matches = val;
    } while (this.matches === 0);
    this.showDOM('footer'); // cachipun inputs
    this.removeDOM('#welcome'); // inicio
    this.showDOM('#hackerman'); // Mostrar hackerman
    this.setScore();
  },

  afraid() {
    const chicken = document.createElement('div');
    chicken.id = 'chicken';
    chicken.innerHTML = `
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/msSc7Mv0QHY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `
    document.querySelector('body').appendChild(chicken);
  },

  setScore() {
    document.querySelector('h1').innerHTML = `
      Juegos: ${ this.currentMatch } / ${ this.matches }
      <br>Hackerman: ${ this.hackerman }
      <br>Tú: ${ this.player }
    `;
    if (this.matches === this.currentMatch) setTimeout( () => this.endGame(), 10);
  },

  getComputerMove() {
    const move = Math.floor(Math.random() * 3);
    let variant;
    switch (move) {
      case 0:
        variant = 'rock';
        break;
      case 1:
        variant = 'paper';
        break;
      case 2:
      default:
        variant = 'scissors'
    }
    const selector = document.querySelector('#hackermanHand');

    selector.innerHTML = `
    <div class="maxIcon ${ variant }">
      <i class="far fa-hand-${ variant }"></i>
    </div>
    `;

    if (this.time1) clearTimeout(this.time1);
    this.time1 = setTimeout(function(){
      selector.innerHTML = '';
    }, 1000);
    return move;
  },

  playWith(move) {
    // 0 piedra; 1 papel; 2 tijera;
    let message;
    const computer = this.getComputerMove();
    if (computer !== move) { // distinto de empate;
      if( // computer win
        computer === 0 && move === 2
        || computer === 1 && move === 0
        || computer === 2 && move === 1
      ) {
        this.hackerman += 1;
        message = 'Hackerman gana';
      }
      else {
        this.player += 1;
        message = 'Tú ganas';
      }
    }
    else {
      this.empate += 1;
      message = 'Empate';
    }
    this.currentMatch += 1;
    const messageInGame = document.querySelector('#message');
    messageInGame.innerHTML = `<div>${ message }</div>`;
    if (this.time2) clearTimeout(this.time2);
    this.time2 = setTimeout(function() {
      messageInGame.innerHTML = '';
    }, 1000);
    this.setScore();
  },

  endGame() {
    let message;
    if (this.hackerman === this.player) message = ['Es un empate!', 'Not bad.', 'assets/img/try.jpeg'];
    else if (this.hackerman > this.player) message = ['Perdiste...', 'Hackerman es toda una máquina', 'assets/img/lose.jpeg'];
    else message = ['Felicidades!', 'Te convertiste en el mejor jugador de cachipún del mundo!', 'assets/img/win.jpeg'];
    const dom = document.createElement('div');
    dom.id = 'endGame';
    dom.innerHTML = `
      <div class="row">
        <div class="col-10 col-xl-6 py-5 m-auto">
          <h1 class="text-center" style="font-size: 60px;">${ message[0] }</h1>
          <h2 class="text-center">${ message[1] }</h2>
          <figure class="text-center">
            <img style="max-width: 300px; width: 100%;" src="${ message[2] }" alt="">
          </figure>
          <p>Jugaste ${ this.matches } veces y el resultado fué:</p>
          <br>
          <p>Empates: ${ this.empate }</p>
          <p>Hackerman: ${ this.hackerman }</p>
          <p>Tú: ${ this.player }</p>
          <br>
          <button class="btn btn-primary" onclick="Game.reset()">Reiniciar</button>
        </div>
      </div>   
    `;
    document.querySelector('body').appendChild(dom);
  },

  reset() {
    document.querySelector('#endGame').remove();
    this.matches = 0;
    this.currentMatch = 0;
    this.hackerman = 0;
    this.player = 0;
    this.empate = 0;
    this.time1 = null;
    this.time2 = null;
    this.start();
  }
}

// set events
document.querySelector('#rock').addEventListener('click', Game.setRock.bind(Game));
document.querySelector('#paper').addEventListener('click', Game.setPaper.bind(Game));
document.querySelector('#scissors').addEventListener('click', Game.setScissors.bind(Game));
