function operationsWithNumbers(firstNumber, secondNumber) {
    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("Incorrect input!");
    } else {
        console.log(`First number: ${firstNumber}. Second number: ${secondNumber}. Sum: ${firstNumber + secondNumber}. Product: ${firstNumber * secondNumber}. Power: ${Math.pow(firstNumber,secondNumber)}.`);
    }
}

operationsWithNumbers(parseInt(prompt('Enter the number')), parseInt(prompt('Enter the number')));
