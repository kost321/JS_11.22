// const log1 = () => console.log("function 1 called!");
// const log2 = () => console.log("function 2 called!");

// const debounceLog100 = createDebounceFunction(log1, 3000);
// debounceLog100();

// setTimeout(() => {
//     const debounceLog200 = createDebounceFunction(log2, 3000);
// debounceLog200();
// },1500)

const log100 = () => console.log(100);

function createDebounceFunction(callback, delay) {
  this.timeout;
  
  return function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(callback, delay);
  }
}

const debounceLog100 = createDebounceFunction(log100, 10000);

debounceLog100();
setTimeout(debounceLog100, 1000);
setTimeout(debounceLog100, 1000);
setTimeout(debounceLog100, 3000);
