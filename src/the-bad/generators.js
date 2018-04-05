/**
 * Anything a generator can do can be done using a higher-order function
 * 
 * Generators also handle arguments in a confusing manner. The next() and
 * yield statements can pass data bi-directionally, making debugging incredibly
 * difficult.
 */
function* generator(i) {
    let acc = i;
    yield acc;
    while (true) {
        acc = yield acc + 10;

    }
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next(1).value);
// expected output: 20

console.log(gen.next(1).value);
// expected output: 11

console.log(gen.next(1).value);
// expected output: 11
