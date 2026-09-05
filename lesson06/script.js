'use strict';

function createGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  function makeGuess() {
    const answer = prompt('Угадай число от 1 до 100');

    if (answer === null) {
      alert('Игра окончена');
      return;
    }

    const guess = Number(answer.trim());
    if (answer.trim() === '' || Number.isNaN(guess)) {
      alert('Введи число!');
      return makeGuess();
    }

    if (guess > secretNumber) {
      alert('Загаданное число меньше');
      return makeGuess();
    }

    if (guess < secretNumber) {
      alert('Загаданное число больше');
      return makeGuess();
    }

    alert('Поздравляю, Вы угадали!!!');
  }

  return makeGuess;
}

createGame()();
