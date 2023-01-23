'use strict';

const secretNumber = Math.trunc((Math.random() * 20) + 1);
document.querySelector('.number').textContent = secretNumber;   //  todo delete

const message = document.querySelector('.message');
let score = 20;

document.querySelector('.check')
    .addEventListener(
        'click', function () {
            const guessValue =
                Number(document.querySelector('.guess').value);
            if (!guessValue) {
                message.textContent = '🥵 No number';
            } else if (guessValue === secretNumber) {
                message.textContent = '😱 Correct Number!!';
            } else if (guessValue > secretNumber) {
                message.textContent = '🤪 Too high!!';
                score--;
            } else if (guessValue < secretNumber) {
                message.textContent = '🤪 Too low!!';
                score--;
            } else {
                message.textContent = 'Start guessing...';
            }
            document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
            if (score === 0) {
                alert('🥵 fail...');
            }
        }
    );
