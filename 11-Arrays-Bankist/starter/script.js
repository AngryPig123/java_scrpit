'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//  slice : return new array
let arr = [`a`, `b`, `c`, `d`, `e`];
let sliceArr1 = arr.slice();
let sliceArr2 = arr.slice(1);
let sliceArr3 = arr.slice(1, -1);


//  splice : modified array
// console.log(arr.splice(1));
// console.log(arr);

//  reverse : reverse array, modified array
// console.log(arr.reverse());
// console.log(arr);


//  concat : array + array, return array
// console.log([1, 2].concat([3, 4]));


//  array at method
const atArray = [1, 2, 3];
// console.log(...atArray.slice(-1));
// console.log(atArray.at(-1));



//  array forEach method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//  map forEach method
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/* 
  currencies.forEach((v, k, map) => {
    console.log(k, v, map);
  });
*/

const displayMovements = (movements) => {
  containerMovements.innerHTML = ``;
  movements.forEach((movement, index) => {
    const type = movement > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__value">${movement} €</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const eurToUsd = 1.1;
const movementUsd = movements.map((movement) => Math.trunc(movement * eurToUsd));

const movementDiscription = movements.map((movement, index, arr) =>
  `movement ${index + 1} : you ${movement > 0 ? `deposited` : `withdraw`} ${Math.abs(movement)}`
);

const userIdArray = (accs) => {
  accs.map((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map((name) => name.at(0))
      .join('');
  })
};
(() => userIdArray(accounts))();


const calcDisplayBalance = (movements) => {
  labelBalance.textContent = `${movements.reduce((acc, cur) => acc + cur)} EUR`;
}

const totalDepositBalance = (movements) => {
  const value = movements
    .filter((item) => item > 0)
    .reduce((total, cur) => total + cur);
  labelSumIn.textContent = `${value}€`;
};

const totalWithdrawBalance = (movements) => {
  const value = movements
    .filter((item) => item < 0)
    .reduce((total, cur) => total + cur);
  labelSumOut.textContent = `${Math.abs(value)}€`;
};

const totalInterestBalance = (movements) => {
  const value = movements
    .reduce((total, cur) => total + cur);
  labelSumInterest.textContent = `${value * 0.1}€`;
};

const balanceInAndOutSetting = (movements) => {
  totalDepositBalance(movements);
  totalWithdrawBalance(movements);
  totalInterestBalance(movements);
}

//  Maximum value
const maximum =
  movements.reduce((first, second) => first > second ? first : second);
const test = movements.find((item) => item === 1234);

let currentAccount;

btnLogin.addEventListener(`click`, (event) => {
  event.preventDefault();
  currentAccount = accounts.find((account) =>
    account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {

    inputLoginPin.value = inputLoginUsername.value = ``;
    inputLoginPin.blur(); //  mouse courser

    labelWelcome.textContent = `Welcome, back ${currentAccount.owner.split(` `).at(0)}`;
    containerApp.style.opacity = 1;
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount.movements);
    balanceInAndOutSetting(currentAccount.movements);
  };


});
