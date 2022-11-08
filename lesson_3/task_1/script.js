const obj = {
    a: 13,
    b: 17
  };
  
let arr = [11,13,15,16,17];

Object.defineProperty(Array.prototype, 'customFilter', {
    value: function(callback, context) { 
    returnedArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.apply(context, [
            this[i], 
            i, 
            this
        ])) {
            returnedArray.push(this[i]);
        }
    }
    return returnedArray;    
    }
});


// const filteredArr = arr.customFilter((function(item) { return item > 2 }), obj) // [3]
const filter = arr.customFilter(function(i) {
    return i >= this.a && i <= this.b
  }
  , obj)




