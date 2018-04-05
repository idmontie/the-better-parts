/**
 * Stop using this. There is no need for this, even when 
 * creating classes
 */

// Class without this
function Animal(sound) {
    const speak = function() {
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