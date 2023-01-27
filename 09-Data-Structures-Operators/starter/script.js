'use strict';

/* 
//  Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//  Functions
const add = function (...a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total = total + a[i];
  }
  return total;
}

const array = [1, 2, 3, 4, 5, 1, 2, 4, 5, 1, 2, 3];
console.log(add(...array));
 */

/* 
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
const newArr = [1, 2, ...arr];
console.log(newArr, badNewArray);
const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenu);
const str = `test ttt`;
let count = 0;
const [a, b, ...test] = [1, 2, 3, 4, 5, 6];
console.log(...test, test);
 */

/* 
restaurant.ordetDelivery({
  name: 'name',
});
 */

/* 
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);


//  Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//  Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//  Nested Objects
const { fri: { open, close, test = '23' } } = openingHours;
console.log(open, close, test);
 */

/* 
const [starterMenu, mainMenu] = restaurant.order(0, 0);
console.log(starterMenu);
console.log(mainMenu);


//  Nested destructuring
const nested = [2, 4, [6, 7]];

// const [a, b, c] = nested;
// console.log(a, b, c);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//  Default values 
const [p, q, r = 5] = [8, 9];
console.log(p, q, r);
 */

/* 
console.log('------- OR -------');
//  Use Any data type, return Any data type,
//  short-circuiting
console.log(3 || 'Jonas');  //  true 일때 첫번째 value return
console.log('' || 'Jonas'); //  '' 가 false 임으로 Jonas retory
console.log(false || 0 || 'Jonas');

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
console.log(undefined || undefined);
console.log(0 || 0);

console.log('------- AND -------');
console.log('test' && 23 && 'test3' && '');
 */



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  ordetDelivery: function (obj) {
    console.log(obj);
  },

};

/* 
//  Nullish 첫번째로 null이 아닌 값을 반환한다.
  restaurant.numGuests = 0;
  const guests = restaurant.numGuests || 10;
  const guestCorrect = restaurant.numGuests ?? 1 ?? '' ?? 10;
  console.log(guestCorrect);
*/


//  Logical Assignment operator
const rest1 = {
  name: 'Capri',
  numGuests: 20,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// rest2.numGuests || (rest2.numGuests = 20);
rest2.numGuests || (rest2.numGuests = 10);

// rest2.numGuests ||= 10;  //  OR assignment operator
console.log(rest2);


