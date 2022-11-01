function rowsAndСolumns(firstNumber, secondNumber) {
    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log("Incorrect input!");
    } else {
        console.log(`First number: ${firstNumber}. Second number: ${secondNumber}. Sum: ${firstNumber + secondNumber}. Product: ${firstNumber * secondNumber}. Power: ${Math.pow(firstNumber,secondNumber)}.`);
    }
}

console.log(rowsAndСolumns('aaa', 3));



// prompt('Enter'), parseInt('Enter the number')