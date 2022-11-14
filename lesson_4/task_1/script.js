const concatStrings = (str, sep) => {
  const strings = [];
  let separator = typeof sep === 'string' ? sep : '';
  strings.push(str);
  let doNotPush = false;
  const func = function (str) {
    if (typeof str !== 'string') {
      doNotPush = true;
    }
    if (!doNotPush) {
      strings.push(str);
    }
    if (str === undefined) {
      return strings.join(separator);
    }
    return func;
  }
  if (str === undefined) {
    return strings.join(separator);
  }
  return func;
}

concatStrings('a')('b')('c')(); 