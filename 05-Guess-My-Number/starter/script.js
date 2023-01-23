'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1);   //  todo delete
const message = document.querySelector('.message');
let score = 20;

let highScore = 0;

document.querySelector('.check')
    .addEventListener(

        'click', function () {

            const guessValue =
                Number(document.querySelector('.guess').value);

            //  when there is no input
            if (!guessValue) {
                message.textContent = '🥵 No number';

                // when player wins
            } else if (guessValue === secretNumber) {
                message.textContent = '😱 Correct Number!!';
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                if (score > highScore) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }

                //  when guess is high
            } else if (guessValue > secretNumber) {
                message.textContent = '🤪 Too high!!';
                score--;
                document.querySelector('.score').textContent = score;

                //  when guess is low
            } else if (guessValue < secretNumber) {
                message.textContent = '🤪 Too low!!';
                score--;
                document.querySelector('.score').textContent = score;

                //  when guess is 
            } else {
                message.textContent = 'Start guessing...';
            }

            if (score <= 0) {
                document.querySelector('.score').textContent = 0;
                message.textContent = '😪 You lost the game';
            }

        }

    );


document.querySelector('.again').addEventListener(
    'click', function () {
        message.textContent = 'Start guessing...';
        //  reset random number
        secretNumber = Math.trunc((Math.random() * 20) + 1);

        //  reset score
        document.querySelector('.score').textContent = 20;
        score = 20;

        //  reset input text
        document.querySelector('.guess').value = '';

        //  reset backgroundcolor
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';

    }

)
