document.addEventListener('DOMContentLoaded', init);

let turn;
let playerOne = document.querySelector('#playerOne');
let playerTwo = document.querySelector('#playerTwo');
let pOneTurn = document.querySelector('#playerOne p');
let pTwoTurn = document.querySelector('#playerTwo p');

let xTiles = {
   t: 0,
   m: 0,
   b: 0,
   '1': 0,
   '2': 0,
   '3': 0
}
let oTiles = {
   t: 0,
   m: 0,
   b: 0,
   '1': 0,
   '2': 0,
   '3': 0
}

function init(ev) {
   turn = 'x';
   document.querySelector('.game-board').addEventListener('click', tileClick);
   let resetBtn = document.querySelector('#resetBtn');
   resetBtn.addEventListener('click', () => {
      location.reload();
   });
}

function tileClick(ev) {

   let xio = ev.target.children[0];
   let oio = ev.target.children[1];
   let occupied = ev.target.dataset.occupied;
   let tileID = ev.target.getAttribute('id');

   if (turn === 'x' && !occupied) {
      xio.classList.remove('off');
      ev.target.setAttribute('data-occupied', 'x');
      trackScore(tileID);
      changeTurns();
   } else if (!occupied) {
      oio.classList.remove('off');
      ev.target.setAttribute('data-occupied', 'o');
      trackScore(tileID);
      changeTurns();
   } else console.log('Tile Occupied');
}

function trackScore(tileID) {
   if (turn === 'x') {
      if (tileID[0] === 't') xTiles.t += 1;
      else if (tileID[0] === 'm') xTiles.m += 1;
      else if (tileID[0] === 'b') xTiles.b += 1;

      if (tileID[1] === '1') xTiles['1'] += 1;
      else if (tileID[1] === '2') xTiles['2'] += 1;
      if (tileID[1] === '3') xTiles['3'] += 1;
      checkForWin('x');
   } else {
      if (tileID[0] === 't') oTiles.t += 1;
      else if (tileID[0] === 'm') oTiles.m += 1;
      else if (tileID[0] === 'b') oTiles.b += 1;

      if (tileID[1] === '1') oTiles['1'] += 1;
      else if (tileID[1] === '2') oTiles['2'] += 1;
      if (tileID[1] === '3') oTiles['3'] += 1;
      checkForWin('o');

   }
}

function changeTurns() {
   if (turn === 'x') {
      turn = 'o';
      playerOne.classList.add('fadeOut');
      playerTwo.classList.remove('fadeOut');
      pOneTurn.classList.add('off');
      pTwoTurn.classList.remove('off');
   } else {
      turn = 'x';
      playerOne.classList.remove('fadeOut');
      playerTwo.classList.add('fadeOut');
      pOneTurn.classList.remove('off');
      pTwoTurn.classList.add('off');
   }
}

function checkForWin(xo) {
   if (xo === 'x') {
      if (Object.values(xTiles).includes(3)) {
         // x won

         displayLine();
      }
   } else {
      if (Object.values(oTiles).includes(3)) {
         // o won

         displayLine();
      }
   }

}

function displayLine() {
   // display line across winning set
}

// create diagonal win
// create modal for winning (replay button)
// css: fireworks for win
// after win, remove listener from game board.
// create line to go over winning line
// animate win line