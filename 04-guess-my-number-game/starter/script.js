'use strict';
console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');

// Ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

//Cached selectors
const bodyEl = document.body;
const messageEl1 = document.querySelector('.message');
const numberEl1 = document.querySelector('.number');
const scoreEl1 = document.querySelector('.score');
const highscoreEl1 = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

//UI Helpers

function setMessage(text) {
  messageEl1.textContent = text;
}
function setNumber(value) {
  numberEl1.textContent = value;
}
function setScore(value) {
  scoreEl1.textContent = value;
}
function setHighscore(value) {
  highscoreEl1.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

// Game State & Reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  console.log('New secret number:', secretNumber);
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  setHighscore(highscore);
  clearInput();
  disablePlay(false);
  setBackground('');
}

renderInitialUI();

// //===== DOM Element Selection - The Foundation
// console.log('=== DOM ELEMENT SELECTION ===');

// const messageEl = document.querySelector('.message');
// console.log(messageEl);

// console.log(messageEl.textContent);
// // messageEl.textContent = 'Hello from JavaScript!';

// // Access score class name
// const scoreEl = document.querySelector('.score');
// console.log(scoreEl);

// const numberEl = document.querySelector('.number');
// // numberEl.textContent = 15;

// const highscoreEl = document.querySelector('.highscore');

// console.log('Current Highscore:', highscoreEl.textContent);

// const guessEl = document.querySelector('.guess');
// console.log(guessEl);

// // guessEl.value = 10;

// console.log('Guess input value', guessEl.value);

// // Game State Variables
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// console.log('Secret Number', secretNumber);

// let score = 20;
// let highscore = 0;

// document.querySelector('.score').textContent = score;
// document.querySelector('.highscore').textContent = highscore;

// console.log('Game slate initialized');

// // Player Code
// let playerName = 'Venz';
// let attempts = 0;
// let gameActive = true;

// console.log('Player:', playerName);
// console.log('Attempts:', attempts);
// console.log('Game active:', gameActive);

// Base Game Logic
checkBtnEl.addEventListener('click', function () {
  console.log('Check button clicked!');

  const guess = Number(guessInputEl.value);
  console.log('Player guessed:', guess);

  if (!guess) {
    setMessage('⛔ No number!');
    return;
  }

  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`);
    return;
  }

  if (guess === secretNumber) {
    console.log('Correct guess!');
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');

    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }

    disablePlay(true);
    clearInput();
    return;
  }

  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('Working!');

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Your Secret Number After Restart', secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.body').style.backgroundColor = '';
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});
