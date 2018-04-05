/**
 * Ellipses allow you to easily write and maintain
 * code that would have required slices and concats
 * beforehand.
 *
 * @param {Function} func 
 * @param {Any} args 
 */
export default function curry(func, ...args) {
    /**
     * @param {Any} args
     */
    return function (...curried) {
        return func(...args, ...curried);
    };
};
