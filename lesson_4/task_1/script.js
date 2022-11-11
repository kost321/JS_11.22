const concatStrings = (fn, seed) => {
    const reduceValue = (args, seedValue) =>    
        args.reduce((acc, a) => {
            if(typeof a !== 'string') {
                a = '';
            }
            return fn.call(fn, acc, a);
          }, seedValue);
    const next = (...args) => {
      return (...x) => {
        if (!x.length || x[0] === null || typeof x[0] === 'number') {
          return reduceValue(args, seed);
        } else if(typeof x[1] === undefined || x[1] === null) {
            x.pop()
            return next(...args, reduceValue(x, seed));
        } else {
            return next(...args, reduceValue(x, seed));
        }
      };
    };
    return next();
  };
  
  const result = concatStrings((x, y) => x + y, '');
  console.log(result('some-value')(2));
