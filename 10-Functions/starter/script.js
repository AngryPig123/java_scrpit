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
            // console.log(`pass!`);
        } else {
            // console.log(`fail`);
        }
    }

    checkIn(flight, jonas);
    // console.log(flight, jonas);

    const newPassport = function (person) {
        person.passport = Math.trunc(Math.random() * 1234) + 1;
    }

    newPassport(jonas);
    // console.log(flight, jonas);
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
            // console.log(`${greet}, ${name}`);
        }
    }
    hey('greet message')('hey name');
 */


//  function expression start
/* 
    //  method call
    function book(fligthNum, name) {
        // console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${fligthNum}`);
        this.bookings.push(
            {
                flight: `${this.iataCode}${fligthNum}`,
                name: name
            }
        )
    }

    const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
    };
    book.call(lufthansa, 3, `Jonas`);
    // console.log(lufthansa);

    const eurowings = {
        airline: 'Eurowings',
        iataCode: 'EW',
        bookings: [],
    };
    book.call(eurowings, 23, 23);
    // console.log(eurowings);

    const swiss = {
        airline: 'Swiss air line',
        iataCode: 'LX',
        bookings: [],
    }
    book.call(swiss, 23, 23);
    // console.log(swiss);


    //  method bind
    book.bind(swiss)(23, 23);


    //  with event listeners 
    lufthansa.planes = 300;
    lufthansa.buyPlane = function () {
        this.planes++;
        // console.log(this.planes);
    };

    document.querySelector(`.buy`).addEventListener(
        `click`, lufthansa.buyPlane.bind(lufthansa)
    );

    //  Partial application
    const addTax = (rate, value) => {
        return value + (value * rate)
    };

    const addVAT = (a) => addTax.bind(null, 0.23)(a);
    // console.log(addVAT(1000));

    const runOnce = function () {
        console.log(`This will never run again`);
    };


    //  function expression, IIFE
    (function () {
        console.log(`This will never run again`);
    })();

    (
        (arr) => console.log(arr)
    )([0, 1, 2, 3, 4]);

    (() => {
        const value = 10;
        console.log(value);
    })();

    const secureBooking = () => {
        let passengerCount = 0;
        return () => {
            passengerCount++;
            console.log(`${passengerCount} passengerCount`);
        };
    };

    const boocker = secureBooking();
    document.querySelector(`.buy`).addEventListener(
        `click`, boocker
    );
 */

/* 
    //  Lexical Enviroment, closure
    let one;    //  바로 초기화 안됨.
    console.log(one, `let one init`);
    one = 1;
    console.log(one);
    function addOne(num) {  //  함수 선언은 변수와 달리 바로 초기화가 된다
        console.log(one + num);
    };
    addOne(5);
 */
/* 
    function makeAdder(x) {
        return function (y) {
            return x + y;
        }
    }

    const add3 = makeAdder(3);
    console.log(add3(2));
 */

/* 
    function makeCounter() {
        let num = 0;
        return function () {
            num++;
        };
    };

    const counter = makeCounter();
 */


document.querySelector('.buy').addEventListener(
    `click`, function () {
        setTimeout(
            () => alert(`5second rate`), 5000
        );
        alert('hi!!');
    }
);




