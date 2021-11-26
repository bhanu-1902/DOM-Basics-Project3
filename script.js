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

let activePlayer, roundScore, gameOn, scores;

const init = function () {
  //Starting Conditions
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gameOn = true;

  diceImage.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  currentPlayer0.classList.remove('player--winner');
  currentPlayer1.classList.remove('player--winner');
  currentPlayer0.classList.add('player--active');
  currentPlayer1.classList.remove('player--active');
};

init();

const switchPlayer = function () {
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
};

//Rolling Die functionality
rollDie.addEventListener('click', function () {
  if (gameOn) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceImage.classList.remove('hidden');

    diceImage.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
      roundScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        roundScore;
    } else {
      switchPlayer();
    }
  }
});

//Holding the score functionality
hold.addEventListener('click', function () {
  if (gameOn) {
    // -> Add current score to active players score
    scores[activePlayer] += roundScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      gameOn = false;
      diceImage.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});

//Reseting the game
reset.addEventListener('click', init);
