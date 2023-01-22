'use strict';

/* 
//  class .
const message = document.querySelector('.message');

//  
console.log(message.textContent);

message.textContent = `🎂Correct Number!`;
console.log(message.textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

const inputValue = document.querySelector('.guess').value;

 */
const message = document.querySelector('.message');
document.querySelector('.check')
    .addEventListener(
        'click', function () {
            const guessValue =
                Number(document.querySelector('.guess').value);
            if (!guessValue) {
                message.textContent = '🥵 No number';
            } else {
                message.textContent = 'Start guessing...';
            }
        }
    );



