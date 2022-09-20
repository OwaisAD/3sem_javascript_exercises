// Guess my number JS file

// Get DOM elements
const guessInputBox = document.querySelector("input.guess")
const guessButton = document.querySelector("button.check") //could select it multiple ways .getElementById or smart as well with querySelector - ("button.check") or (".left button")
const restartButton = document.querySelector("button.again")
const message = document.querySelector(".message")
const displayResult = document.querySelector(".number")

//Helper functions
// amount of numbers
let n = 20

const getRandomNumber = (n) => {
    return Math.ceil(Math.random() * n)
}

const evaluateGuess = () => {
    switch (true) {
        case guessInputBox.value == randomNumber:
            message.innerText = "You hit the number 🎆!"
            displayResult.innerText = randomNumber;
            break;
        case guessInputBox.value > randomNumber:
            message.innerText = "Try lower ⬇️ mate.."
            break;
        case guessInputBox.value < randomNumber:
            message.innerText = "Try higher ⬆️ g!"
            break;
        default:
            alert("Man u managed to bug the game..")
    }
}

// Declare variables
let randomNumber = getRandomNumber(n)
console.log(randomNumber)

// Define events
guessButton.addEventListener("click", evaluateGuess)

restartButton.addEventListener("click", () => {
    displayResult.innerText = "?"
    randomNumber = getRandomNumber(n)
    console.log("Restarted: ", randomNumber)
})