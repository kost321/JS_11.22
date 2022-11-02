function operationsWithNumbers(firstNumber, secondNumber) {
    let newFirstNumber;
    let newSecondNumber;
    if(firstNumber.length === 0 || secondNumber.length === 0) {
        console.log("Incorrect input!");
        return
    } else {
        newFirstNumber = Number(firstNumber);
        newSecondNumber = Number(secondNumber);
    }
    if(isNaN(newFirstNumber) || isNaN(newSecondNumber)) {
        console.log("Incorrect input!");
    } else {
        console.log(`First number: ${newFirstNumber}. Second number: ${newSecondNumber}. Sum: ${newFirstNumber + newSecondNumber}. Product: ${newFirstNumber * newSecondNumber}. Power: ${+Math.pow(newFirstNumber,newSecondNumber)}.`);
    }
}

operationsWithNumbers(prompt('Enter the number (Attention: enter fractional numbers with a dot)'), prompt('Enter the number (Attention: enter fractional numbers with a dot)'));
