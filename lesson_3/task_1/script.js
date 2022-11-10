const obj = {
    a: 13,
    b: 17
  };
  
// const obj = [15,17]
let arr = [11,13,15,16,17];

Object.defineProperty(Array.prototype, 'customFilter', {
    value: function(callback, context) {
    if(typeof callback === 'function') {
        if(typeof context === 'undefined' || typeof context === 'object') {
            returnedArray = [];
            for (let i = 0; i < this.length; i++) {
                if (callback.apply(context, [this[i], i, this])) {
                    returnedArray.push(this[i]);
                }
            }
            return returnedArray;
        } else {
            throw new Error();    
        }
    } else {
        throw new Error()
    }
    }
});


const filteredArr  = arr.customFilter((function(item) { return item > 15 })) // 16,17
// const filteredArr  = arr.customFilter(function(i) {
//     return i >= this.a && i <= this.b
//   }, obj)
