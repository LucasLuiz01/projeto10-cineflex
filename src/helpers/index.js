function objToArray(obj) {
    const arr = [];

    Object.keys(obj).forEach(key => {
        if (obj[key] === true) {
            arr.push(key);
        }
    })

    return arr;
}

const myObj = {'1234': true, '4321': false, '1111': true};
console.log(objToArray(myObj));