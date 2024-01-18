const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;


function generateFunFact(number) {
    return `The number you are looking for is ${getFactDescription(number)}?`;
}

function getFactDescription(number) {
    if (number % 2 === 0) {
        return 'an even number.';
    } else {
        return 'an odd number.';
    }
}

document.getElementById('funFact').innerHTML = '';

function getTip() {
    document.getElementById('funFact').innerHTML = generateFunFact(secretNumber);
}

function checkGuess() {
    const userGuess = document.getElementById('guess').value;

    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    attempts++;

    if (userGuess == secretNumber) {
        document.getElementById('result').innerHTML = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        document.getElementById('result').style.color = '#2ecc71';
        document.getElementById('guess').disabled = true;
    } else {
        const hint = userGuess < secretNumber ? 'higher' : 'lower';
        document.getElementById('result').innerHTML = `Wrong guess! Try a ${hint} number.`;
        document.getElementById('result').style.color = '#e74c3c';
    }
}
