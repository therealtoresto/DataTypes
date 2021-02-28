'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

const obj = { number: 0, string: 0, boolean: 0 };

for (const elem of arr) {
    if (typeof elem === 'number') {
        obj.number += 1;
    }
    if (typeof elem === 'string') {
        obj.string += 1;
    }
    if (typeof elem === 'boolean') {
        obj.boolean += 1;
    }
}

const countTypesInArray = arr => {
    const counters = {};
    for (const element of arr) {
        const type = typeof element;
        const count = counters[type] || 0;
        counters[type] = count + 1;
    }
    return counters;
};

console.dir(countTypesInArray(arr));

//console.dir({ obj });
