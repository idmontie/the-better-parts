/**
 * There is very little need for symbols if WeakMaps are used
 */
const a1 = Symbol('a');
const a2 = Symbol('a');

const obj = {
    [a1]: 'value1',
    [a2]: 'value2',
};

console.log(obj);

const b1 = {};
const b2 = {};

const map = new WeakMap();
map.set(b1, 'value1');
map.set(b2, 'value2');

console.log(map);
