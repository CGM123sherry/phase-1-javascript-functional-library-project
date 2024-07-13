// functions
//nyEach
function myEach(collection, callback) {
    //verify its an array
    if (Array.isArray(collection)) {
        //iterayte over the elements
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
        //otherwise if its an object
    } else {
        const values = Object.values(collection);
        //iterate over the object
        for (let i = 0; i < values.length; i++) {
            callback(values[i], i, collection);
        }
    }
    return collection;
}

//myMap: has two arg
function myMap(collection, callback) {
    //create an empty array
    let newArray = [];
    //ensure it's in the coolection
    if (Array.isArray(collection)) {
        //iterate over the array
        for (let i = 0; i < collection.length; i++) {
            //add the newly created array
            newArray.push(callback(collection[i], i, collection));
        }
        //else if it's an object
    } else {
        //define values
        const values = Object.values(collection);
        //iterate over thr values
        for (let i = 0; i < values.length; i++) {
            //add the new values
            newArray.push(callback(values[i], i, collection));
        }
    }
    return newArray;
}

//myReduce: has 3 arg
function myReduce(collection, callback, acc) {
    //make sure the initial no. is 0
    let startIdx = 0;
    //the values could be either in an array or an object
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    // acc starts from 1
    if (acc === undefined) {
        acc = values[0];
        startIdx = 1;
    }
//iterate over
    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }

    return acc;
}

//myFind: two arg
function myFind(collection, predicate) {
    //define if array or object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    //iteration
    for (let i = 0; i < values.length; i++) {
        //if the predicate is found
        if (predicate(values[i], i, collection)) {
            return values[i];
        }
    }
    return undefined;
}

//myFilter: two arg
function myFilter(collection, predicate) {
    //create an empty array
    let newArray = [];
    const values = Array.isArray(collection) ? collection : Object.values(collection);
//iteration
    for (let i = 0; i < values.length; i++) {
        //if the predicate is found
        if (predicate(values[i], i, collection)) {
            newArray.push(values[i]);
        }
    }

    return newArray;
}

//mySize; one arg
function mySize(collection) {
    //return the length of the array or number of keys
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

//myFirst: two arg
function myFirst(array, n = 1) {
    //return the first n element
    return n === 1 ? array[0] : array.slice(0, n);
}
//myLast: two arg
function myLast(array, n = 1) {
    //return the last n element
    return n === 1 ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0));
}
// for objects
//myKeys
function myKeys(object) {
    //return the keys of the object
    return Object.keys(object);
}

//myValues
function myValues(object) {
    //return the values of the object
    return Object.values(object);
}
