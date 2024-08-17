const randNum = Math.floor(Math.random() * 100 + 1);
console.log(randNum);

const inputValue = document.getElementById('guessField'); /* selecting input box space */
const submitButton = document.getElementById('subt'); /* selecting submit button */
const guessSlot = document.querySelector('.gueses');
const lastResult = document.querySelector('.lastResult');
const lowORhigh = document.querySelector('.lowORhigh');
const startOver = document.querySelector('.resultParas');
let paragraph = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(inputValue.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randNum) {
        displayMessage('You guessed it Right');
        endGame();
    } else if (guess < randNum) {
        displayMessage('Number is too low');
    } else if (guess > randNum) {
        displayMessage('Number is Too High');
    }
}

function displayGuess(guess) {
    inputValue.value = '';
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowORhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    inputValue.value = '';
    inputValue.setAttribute('disabled', '');
    paragraph.classList.add('button');
    paragraph.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(paragraph);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        inputValue.removeAttribute('disabled');
        startOver.removeChild(paragraph);
        playGame = true;
    });
}
