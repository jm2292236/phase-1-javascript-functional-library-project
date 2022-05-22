
function myEach(collection, callback) {
    let array;
    if (Array.isArray(collection)) {
        array = collection;
    } else {
        // array = Object.values(collection);
        array = myValues(collection);
    }

    for (const el of array) {
        callback(el);
    }

    return collection;
}



function myMap(collection, callback) {
    let array;
    if (Array.isArray(collection)) {
        array = collection;
    } else {
        // array = Object.values(collection);
        array = myValues(collection);
    }

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }

    return newArray;
}



function myReduce(collection, callback, acc) {
    let array;
    if (Array.isArray(collection)) {
        array = collection;
    } else {
        // array = Object.values(collection);
        array = myValues(collection);
    }

    let start = 0;
    if (typeof acc === "undefined") {
        acc = array[0];
        start = 1;
    }

    let newArray = [];
    for (let i = start; i < array.length; i++) {
        acc = callback(acc, array[i], array);
    }

    return acc;
}



function myFind(collection, callback) {
    let array;
    if (Array.isArray(collection)) {
        array = collection;
    } else {
        // array = Object.values(collection);
        array = myValues(collection);
    }

    let foundElement;
    for (const el of array) {
        if (callback(el)) {
            foundElement = el;
            break;
        }
    }

    return foundElement;
}



function myFilter(collection, callback) {
    let array;
    if (Array.isArray(collection)) {
        array = collection;
    } else {
        // array = Object.values(collection);
        array = myValues(collection);
    }

    let filteredArray = [];
    for (const el of array) {
        if (callback(el)) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
}



function mySize(collection) {
    let array;
    if (Array.isArray(collection)) {
        array = collection;
    } else {
        // array = Object.values(collection);
        array = myValues(collection);
    }

    return array.length;
}



function myFirst(array, n) {
    if (typeof n === "undefined") {
        return array[0];
    } else {
        let newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(array[i])
        }
        return newArray;
    }
}



function myLast(array, n) {
    if (typeof n === "undefined") {
        return array[array.length - 1];
    } else {
        let newArray = [];
        for (let i = (array.length - n); i < array.length; i++) {
            newArray.push(array[i])
        }
        return newArray;
    }
}



function myKeys(object) {
    const objectKeys = [];
    for (let key in object) {
        objectKeys.push(key);
    }

    return objectKeys;
}



function myValues(object) {
    const objectValues = [];
    for (let key in object) {
        objectValues.push(object[key]);
    }

    return objectValues;
}
