/**
 * Stopped using new
 * 
 * Stopped using Object.create
 * 
 * @see the-worst/this.js
 */

// Class without this
function Animal(sound) {
    const speak = function () {
        console.log(sound);
    };

    return {
        speak,
    };
}

function Dog() {
    const sound = 'woof';
    // Inheritance
    const { speak } = new Animal(sound);

    return {
        speak,
    };
}

const animal = Dog();
animal.speak();