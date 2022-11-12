class Calculator {
  constructor(num1, num2) {
    if(isNaN(num1) || isNaN(num2) || arguments.length > 2 || typeof num1 !== 'number' || typeof num2 !== 'number' || !isFinite(num1) || !isFinite(num2)){
      throw new Error;
    }
    this.num1 = num1;
    this.num2 = num2;
  }

  setX = (...args) => {
    if(args.length === 0 || typeof args[0] !== 'number' || isNaN(args[0]) || !isFinite(args[0])) {
      throw new Error;
    }
    this.num1 = args[0];
  }

  setY = (...args) => {
    if(args.length === 0 || args.length > 1 || typeof args[0] !== 'number' || isNaN(args[0]) || !isFinite(args[0])) {
      throw new Error;
    }
    this.num2 = args[0];
  }

  getSum = () => {
    return this.num1 + this.num2;
  }

  getMul = () => {
    return this.num1 * this.num2;
  }

  getSub = () => {
    return this.num1 - this.num2;
  }

  getDiv = () => {
    if(this.num2 === 0) {
      throw new Error;
    }
    return this.num1 / this.num2;
  }
}

const calculator = new Calculator(2, 2);
