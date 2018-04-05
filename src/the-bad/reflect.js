/**
 * @see proxies.js
 */

const a1 = Symbol('a');
const obj = {
    [a1]: 'asdf',
};

Reflect.get(obj, a1);