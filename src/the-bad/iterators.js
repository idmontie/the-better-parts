/**
 * There is no need to make iterators a first class feature of
 * the language. They are only really needed as a first class
 * feature because of generators.
 */
function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { done: true };
        }
    };
}