'use strict';

/* let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);
const private = `test`;
console.log(private); */


/* function test(number) {
    const text = `test ${number}`;
    return text;
}
console.log(test(3)); */

/* const test = function (birthYear) {
    return 2037 - birthYear;
} */


/* const test2 = (birthYear) => {  //  대활호로 묶이면 return 필요.
    return 2023 - birthYear
};
console.log(test2(1992)); */


// function divideFruit(fruit) {
//     return fruit * 5;
// }
// function fruitProccessor(apples, oranges) {
//     const juice = `Juice withd ${divideFruit(apples)} apples and ${divideFruit(oranges)} oranges`;
//     console.log(juice);
//     return juice;
// }
// fruitProccessor(5, 6);

// const averageScore = (a, b, c) => console.log((a, b, c) / 3);
// const teamAScore = averageScore(10, 20, 30);
// const teamBScore = averageScore(10, 30, 40);
// const teamCScore = averageScore(10, 50, 60);

///////////////////////////////////////
// Basic Array Operations (Methods)
/* const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
} */


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    friends: [`Micheal`, `Peter`, `Steven`]
};

console.log(jonas);
