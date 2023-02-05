'use strict';
/*
    const flight = `LH234`;
    const jonas = {
        name: `Jonas Schmedtmann`,
        passport: 1234,
    }

    const checkIn = function (flightNum, passenger) {
        flightNum = `LH999`;
        passenger.name = `Mr.` + passenger.name;
        if (passenger.passport === 1234) {
            console.log(`pass!`);
        } else {
            console.log(`fail`);
        }
    }

    checkIn(flight, jonas);
    console.log(flight, jonas);

    const newPassport = function (person) {
        person.passport = Math.trunc(Math.random() * 1234) + 1;
    }

    newPassport(jonas);
    console.log(flight, jonas);
 */


/* 
    //  bind method
    const oneWord = function (str) {
        return str.replace(/ /g, '').toLowerCase();
    }

    const upperFirstWord = function (str) {
        const [first, ...others] = str.split(' ');
        return [first.toUpperCase(), ...others].join(' ');
    }

    // higher order function
    const transformer = function (str, fn) {
        return fn(str);
    }

    const hey = function (greet) {
        return function (name) {
            console.log(`${greet}, ${name}`);
        }
    }
    hey('greet message')('hey name');
 */
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(fligthNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${fligthNum}`);
        this.bookings.push(
            {
                flight: `${this.iataCode}${fligthNum}`,
                name: name
            }
        )
    },
};
lufthansa.book(3, `Jonas`);
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    book(fligthNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${fligthNum}`);
        this.bookings.push(
            {
                flight: `${this.iataCode}${fligthNum}`,
                name: name
            }
        )
    },
};

// Does NOT work
const book = lufthansa.book;

book.call(lufthansa, 23, 23);
console.log(lufthansa);

const swiss = {
    name: 'Swiss air line',
    iataCode: 'LX',
    bookings: []
}
book.call(swiss, 23, 23);
console.log(swiss);