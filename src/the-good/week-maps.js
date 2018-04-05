export default function weakMapExample() {
    const map = new WeakMap();
    const obj2 = {};
    const obj3 = {};
    
    {
        const obj1 = {};
        
        map.set(obj1, 'value1');
        map.set(obj2, 'value2');
        map.set(obj3, 'value3');
    
        // console.log('Objects are unique: ', obj1 !== obj2 && obj2 !== obj3);
    
        // You can't inspect the size of a WeakMap except through the
        // console
        // console.log('Map size', '3', map);
    
        console.log('Deleting obj1 from memory');
        delete obj1;
    }

    // You can't inspect the size of a WeakMap except through the
    // console
    // console.log('Map size', '2', map);

    return map;
}