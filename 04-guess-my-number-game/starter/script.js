'use strict';
console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

//===== DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

const messageEl = document.querySelector('.message');
console.log(messageEl);

console.log(messageEl.textContent);
// messageEl.textContent = 'Hello from JavaScript!';

// Access score class name
const scoreEl = document.querySelector('.score');
console.log(scoreEl);

const numberEl = document.querySelector('.number');
// numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');

console.log('Current Highscore:', highscoreEl.textContent);

const guessEl = document.querySelector('.guess');
console.log(guessEl);

// guessEl.value = 10;

console.log('Guess input value', guessEl.value);

// Game State Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log('Secret Number', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game slate initialized');

// Player Code
let playerName = 'Venz';
let attempts = 0;
let gameActive = true;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);

// Base Game Logic
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = 'Too low!';
  }
});
