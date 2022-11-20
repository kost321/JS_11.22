class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }
  
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
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
  
    updateDisplay() {
        if(typeof this.currentOperand === 'string') {
            this.currentOperandText.innerText = this.currentOperand;
        } else {
            let lengthOfNumber = this.currentOperand.toString();
            const decimalDigits = lengthOfNumber.split('.')[1];
            if(decimalDigits > 8) {
                this.currentOperandText.innerText = this.currentOperand.toFixed(8);
            } else {
                this.currentOperandText.innerText = this.currentOperand;
            }
        }
        if (this.operation) {
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandText.innerText = '';
        }
    }
}
  
  
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
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
  
