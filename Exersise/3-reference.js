'use strict';

function inc(obj) {
    if (typeof obj === 'object') {
        obj.n++;
    }
}

const obj = { n: 5 };
inc(obj);

console.dir(obj);
