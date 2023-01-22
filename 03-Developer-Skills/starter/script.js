// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];

    for (let i = 1; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== `number`) continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    const minMax = {
        max: max,
        min: min,
        amplitude: max - min
    }

    return minMax;

}

console.log(calcTempAmplitude([3, 15, 6, -7, `test`]));


