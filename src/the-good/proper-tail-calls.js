function check(method, n) {
    if (typeof n !== 'number') {
        throw {
            name: "TypeError",
            message: "not a number",
            method,
            value: n,
        };
    }
}

/**
 * In es6, there will be proper tail calls, allowing
 * recursive functions to be implemented correctly
 * without having to worry about stack overflows.
 *
 * @param {Number} n
 * @throws TypeError
 */
export default function fib(n) {
    check('fib', n);

    if (n === 0 || n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}
