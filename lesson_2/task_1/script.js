let obj = {
    a: 1,
    b: {
        c:[1,3,5,[true]],
        d:{
            f: undefined,
            c: null,
        }
    },
    e: 'Hello',
}

function makeDeepCopy(obj) {
    let newObj = obj.constructor();
    if(typeof obj === 'object' && obj !== null) {
        for(let key in obj) {
            if(obj[key] !== null &&  typeof(obj[key]) === 'object') {
                newObj[key] = makeDeepCopy(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    } else {
        throw new Error();
    }
    return newObj
}

let result = makeDeepCopy(obj); 















