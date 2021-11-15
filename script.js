'use strict';

//Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const rollDie = document.querySelector('.btn--roll');
const reset = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const currentPlayer0 = document.querySelector('.player--0');
const currentPlayer1 = document.querySelector('.player--1');

//Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let roundScore = 0;

//Rolling Die functionality
rollDie.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceImage.classList.remove('hidden');

  diceImage.src = `images/dice-${dice}.png`;

  if (dice !== 1) {
    roundScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      roundScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.add('player--active');

    currentPlayer0.classList.toggle('player--active'); //Toggle method adds class if it isn't present and removes if it is
    currentPlayer1.classList.toggle('player--active');
  }
});
