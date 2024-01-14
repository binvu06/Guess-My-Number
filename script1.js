const messageEl = document.querySelector('.message');
const btnCheck = document.querySelector('.check');
const guess = document.querySelector('.guess');
const body = document.querySelector('body');
const numberEl = document.querySelector('.number');
const highscoreEL = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const btnAgain = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

btnCheck.addEventListener('click', function () {
  // 1) Input value from user
  const userGuess = +guess.value;
  console.log(userGuess);

  // 2) When user click check, NOT number
  if (!userGuess) return displayMessage('⛔ No number');

  // 3) When user equal to secretNumber
  if (userGuess === secretNumber) {
    displayMessage('🎉 Correct Number');
    numberEl.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEL.textContent = highscore;
    }
  }

  // 4) When user NOT equal to secretNumber
  if (userGuess !== secretNumber) {
    if (score > 1) {
      displayMessage(userGuess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
      body.style.backgroundColor = 'red';
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guess.value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
