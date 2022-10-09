function objToArray(obj) {
    const arr = [];

    Object.keys(obj).forEach(key => {
        if (obj[key].selected === true) {
            arr.push(key.name);
        }
    })

    return arr;
}

const myObj = {12649 : {selected: true, name: 'Assento 49'}, 12650 :  {selected: true, name: 'Assento 50'}};
console.log(objToArray(myObj));