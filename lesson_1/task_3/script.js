function warmOrHold(firstNumber, secondNumber) {
    let newSecondNumber = firstNumber + 100;
    let randomNumber;

    if(firstNumber <= 0 || secondNumber <= 0 || isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please enter only positive numbers');
        return
    } else if(secondNumber < newSecondNumber) {
        alert(`Please enter a number greater than ${newSecondNumber}`);
        return
    } else {
        randomNumber = Math.floor(Math.random() * (firstNumber - secondNumber) + secondNumber);
        // You can check the randomNumber
        // console.log(`Random number is ${randomNumber}`);
    }
    
    let userRandomNumber = Number(prompt('Enter the number')); 
    let difference = 0;

    if(userRandomNumber === randomNumber) {
        alert('Great! It’s like you knew the number');    
    } else if(userRandomNumber !== randomNumber) {
        alert('Wrong number, you can try again');
        userRandomNumber = Number(prompt('Enter the number'));
        difference = randomNumber - userRandomNumber;
        for(let i = 1; i < 10000; i++) {
            if(userRandomNumber === randomNumber) {
                i++;
                alert(`You did it in ${i} attempts. Congratulations!`); 
                break;
            } else if(difference < 20 && difference > 1 || difference > -20 && difference < -1) {
                alert('Warmer');
                userRandomNumber = Number(prompt('Enter the number'));
                difference = randomNumber - userRandomNumber;
                continue;
            } else if(difference >= 20 || difference <= -20) {
                alert('Colder');
                userRandomNumber = Number(prompt('Enter the number'));
                difference = randomNumber - userRandomNumber;
                continue;
            } else if(difference === 1 || difference === -1 ) {
                alert('You’re almost there');
                userRandomNumber = Number(prompt('Enter the number'));
                difference = randomNumber - userRandomNumber;
                continue;
            }
        }        
    }                
}

warmOrHold(Number(prompt('Enter the positive number')), Number(prompt('Enter the positive number')));
