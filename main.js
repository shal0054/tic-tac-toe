document.addEventListener('DOMContentLoaded', init);

let turn;
let playerOne = document.querySelector('#playerOne');
let playerTwo = document.querySelector('#playerTwo');
let pOneTurn = document.querySelector('#playerOne p');
let pTwoTurn = document.querySelector('#playerTwo p');

let xTiles = [];
let oTiles =[];

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

   if (turn === 'x' && !occupied) {
      xio.classList.remove('off');
      ev.target.setAttribute('data-occupied', 'x');
      xTiles.push(ev.target.getAttribute('id'));
      changeTurns();
   } else if (!occupied) {
      oio.classList.remove('off');
      ev.target.setAttribute('data-occupied', 'o');
      oTiles.push(ev.target.getAttribute('id'));
      changeTurns();
   } else console.log('Tile Occupied');
}

function changeTurns() {
   if (turn === 'x') {
      turn = 'o';
      playerOne.classList.add('fadeOut');
      playerTwo.classList.remove('fadeOut');

      pOneTurn.classList.add('off');

      pTwoTurn.classList.remove('off');

      checkForWin('x');
   } else {
      turn = 'x';
      playerOne.classList.remove('fadeOut');
      playerTwo.classList.add('fadeOut');

      pOneTurn.classList.remove('off');

      pTwoTurn.classList.add('off');
      checkForWin('o');
   }
}

function checkForWin(xo) {
   if (xo === 'x') {
      if (xTiles.length > 2) {

      }
   } else {
      if (oTiles.length > 2) {
         
      }
   }

}