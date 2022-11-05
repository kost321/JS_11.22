function selectFromInterval(arr, firstInterval, secondInterval) {
    let newArr = [];
    let startInterval = firstInterval;
    let endInterval = secondInterval;
    
    if(isNaN(firstInterval) || isNaN(secondInterval)) {
        throw new Error();
    } else if(typeof firstInterval === 'number' && typeof secondInterval === 'number') {
        if (firstInterval > secondInterval) {
            startInterval = secondInterval;
            endInterval = firstInterval;
        }
    } else {
        throw new Error;
    }

    if(Array.isArray(arr)) {
        let truthCheck = arr.every((element) => {
            if(isNaN(element)) {
                return false
            } else if(typeof element === 'number') {
                return true
            } else {
                return false
            }
        })
        if(truthCheck) {
            for(let value of arr) {
                if(value >= startInterval && value <= endInterval) {
                    newArr.push(value);
                } 
            }
           } else {
            throw new Error();
        }
    } else {
        throw new Error();
    }
    return newArr
}

selectFromInterval([1,-2,5,0,-13,0], 5, -13); 















