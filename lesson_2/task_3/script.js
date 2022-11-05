function createIterable(start, finish) {
    if ((start === false || finish === false) || (isNaN(start)) || isNaN(finish) || start === null || finish === null || finish <= start ) {
        throw new Error();
    } else if(typeof start === 'number' && typeof finish === 'number') {
        let range = {
            from: start,
            to: finish,
            [Symbol.iterator]: function() {
                let index = 0;
                const keys = Object.keys(this)
                return {
                    next: () => {
                        const hasMore = index < keys.length;
        
                        if(hasMore) {
                            return { done: false, value: this[keys[index++]]} 
                        } else {
                            return { done: true}
                        }
                    }
                }
            },
        }
        return range;
    } else {
        throw new Error();
    }
}

let result = createIterable(0,4);

// Can use the loop for..of
// for(let i of result) {
//     console.log(i)
// }