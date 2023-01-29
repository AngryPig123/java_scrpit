'use strict';
/* 
    console.log('set collection framwork start');

    const ordersSet = new Set([
      'test1', 'test1', 'test1', 'test2', 'test3'
    ]);


    for (const [i, el] of [...ordersSet].entries()) {
      console.log(`${i + 1},${el}`);
    }


    console.log(openingHours);

    const hoursMap = new Map(Object.entries(openingHours));

    for (const [k, { open, close }] of hoursMap) console.log(`${k},${open},${close}`);
 */



/* 
  console.log([...plane]);
  console.log(plane.length);
  console.log(plane.indexOf('Portugal'));
  console.log(`${plane.toLowerCase()}`);
  console.log(`oiew e wqasds`.replace(' ', ''));
*/

const announcement = `All passengers come to boarding door 23, Boarding door 23!`;

console.log(announcement.replace(`door`, `gate`));
console.log(announcement.replace(/door/g, 'gate'));

const plane = `Airbus A320neo`;
console.log(plane.includes('A320'));  //  포함
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A320neo')); //  시작 문자열

if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
  console.log(`Part of the NEW Airbus family`);
}

//  Practice exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`no`);
  } else {
    console.log(`Welcome`);
  }
};

checkBaggage('I have a laptop, some food and a pocket knife');
console.log(...`a + very + nice + string`.split(` + `));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);
console.log([`Mr.`, firstName, lastName.toUpperCase()].join(' '));

//  띄어쓰기를 구분으로 upper 구현
const str = `a ab abc abcd abcde abcdef`;
const upperText = function (str) {

  const textArray = str.split(' ');
  const textUpper = [];
  for (const text of textArray) {
    textUpper.push(text.replace(text[0], text[0].toUpperCase()));
  }
  return textUpper;
};

console.log(
  upperText(str).join(' ')
);
