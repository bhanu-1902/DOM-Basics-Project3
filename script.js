'use strict';

//Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');

//Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add('hidden');
