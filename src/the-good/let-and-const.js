/**
 * Stop using var, and use let and const instead.
 */
export default function letConstExample() {
    // The accumulator is scoped to the function
    // and is also mutable.
    let acc = 2;
    // Factor is scoped to the function
    // and is immutable.
    const factor = 2;


    while (acc < 100) {
        // Add is scoped to the while loop
        const add = acc * factor;
        acc += add;
    }

    return acc;
};
