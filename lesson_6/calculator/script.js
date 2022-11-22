class Calculator {
    constructor(previousOperandElem, currentOperandElem) {
        this.previousOperandElem = previousOperandElem;
        this.currentOperandElem = currentOperandElem;
        this.clear();
    }
  
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
  
    changeSign() {
        if(this.currentOperand === '') {
            this.currentOperand = this.currentOperand;
        } else {
            this.currentOperand =  -this.currentOperand;
        }
    }

    delete() {
        let lengthOfNumber = this.currentOperand.toString();
        const decimalDigits = lengthOfNumber.split('.')[1];
        if (lengthOfNumber.length === 0) {
            this.operation = undefined;
            this.currentOperand = this.previousOperand;
            this.previousOperand = '';
        } else if(decimalDigits === undefined) {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        } else if(decimalDigits.length > 8){
            this.currentOperand = this.format(this.currentOperand);
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }
    }
  
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }   
    }
  
    chooseOperation(operation) {
        if (this.currentOperand === '') { 
            return;
        }
        if (this.previousOperand !== '') {
            this.compute();
        }
            this.operation = operation;
            this.previousOperand = this.currentOperand;
            this.currentOperand = '';
    }
  
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) {
            return  
        } 
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    
    format(operand) {
        return Math.round(parseFloat(operand) * 100000000) / 100000000;
    }

    updateDisplay() {
        if(typeof this.currentOperand === 'string') {
            this.currentOperandElem.innerText = this.currentOperand;
        } else {
            let lengthOfNumber = this.currentOperand.toString();
            const decimalDigits = lengthOfNumber.split('.')[1];
            if(decimalDigits === undefined) {
                this.currentOperandElem.innerText = this.currentOperand;
            } else if(decimalDigits.length > 8) {
                this.currentOperandElem.innerText = this.format(this.currentOperand);
            } else {
                this.currentOperandElem.innerText = this.currentOperand;
            }
        }
        if (this.operation) {
            if(typeof this.previousOperand === 'number') {
                let lengthOfNumber = this.previousOperand.toString();
                const decimalDigits = lengthOfNumber.split('.')[1];
                if(decimalDigits === undefined) {
                    this.previousOperandElem.innerText = `${this.previousOperand} ${this.operation}`;
                } else if(decimalDigits.length > 8) {
                    this.previousOperandElem.innerText = `${this.format(this.previousOperand)} ${this.operation}`;
                } else {
                    this.previousOperandElem.innerText = `${this.previousOperand} ${this.operation}`;
                }
            } else {
                this.previousOperandElem.innerText = `${this.previousOperand} ${this.operation}`;   

            }
        } else {
            this.previousOperandElem.innerText = '';
        }
        if (this.currentOperand === Infinity || this.currentOperand === -Infinity || this.currentOperand === NaN) {
            this.currentOperandElem.innerText = `Can't divide by zero`;
            this.clear();
        }
        if (this.previousOperand === Infinity || this.previousOperand === -Infinity || this.previousOperand === NaN) {
            this.previousOperandElem.innerText = `Can't divide by zero`;
            this.clear();
        }
    }
}
  
  
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const changeSign = document.querySelector('[data-sign-change]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
  
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
  

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
  })
  
changeSign.addEventListener('click', () => {
    calculator.changeSign();
    calculator.updateDisplay();
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})
  
equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})
  
allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})
  
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})
  
