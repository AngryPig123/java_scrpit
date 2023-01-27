'use strict';

//  Primitive types
let lastName = `Williams`;
let oldLastName = `${lastName}`;
lastName = `Davis`;
console.log(lastName, oldLastName);

//  reference types
const jessica = {
    firstName: `Jessica`,
    lastName: `Williams`,
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(marriedJessica, jessica);

//   Copyting objects
const jessica2 = {
    firstName: `Jessica`,
    lastName: `Williams`,
    age: 27
};

const test1 = Object.assign({}, jessica2);
const test2 = Object.assign(jessica2);
console.log(test1, test2);

