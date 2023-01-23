'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsColseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const addHiddenClass = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const removHiddenClass = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', removHiddenClass);

btnsColseModal.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        if (!modal.classList.contains('hidden')) {
            addHiddenClass();
        }
    }
});
