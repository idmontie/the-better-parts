/**
 * Don't use for.
 * 
 * Instead use array.forEach and its many sisters
 */
const a = [1,2,3,4].map(function(i) {
    return i * i;
});

/**
 * Don't use for-in.
 * 
 * Instead use Object.keys(obj)
 */
const obj = { a: '1', b: '2' };
const a = Object.keys(obj).map(function (i) {
    return { key: i, value: obj[i] };
});

/**
 * When proper tail calls land in es6, don't use while
 */