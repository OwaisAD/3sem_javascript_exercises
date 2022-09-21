'use strict'

const buttons = document.getElementById("buttons")
const display = document.getElementById("display")
const clearBtn = document.getElementById("clear")

let number
let operator

const numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operatorsList = ["+", "-", "/", "*"];

buttons.addEventListener("click", (e) => {
    console.log("Hit the following: ", e.target.textContent)
    if (numbersList.includes(e.target.textContent)) {
        display.innerHTML += e.target.textContent
    } else if (operatorsList.includes(e.target.textContent)) {
        number = parseFloat(display.innerText)
        operator = e.target.textContent
        console.log("Current number", number)
        console.log("Current operator", operator)
        display.innerHTML = ""
    } else if (e.target.textContent === '.') {
            display.innerHTML += e.target.textContent
    } else if (e.target.textContent === '=') {
        let result;
        if (operator === "+") {
            result = number + parseFloat(display.textContent);
        } else if (operator === "-") {
            result = number - parseFloat(display.textContent);
        } else if (operator === "/") {
            result = number / parseFloat(display.textContent);
        } else if (operator === "*") {
            result = number * parseFloat(display.textContent);
        }
        // get result and show it in the display
        display.innerHTML = result
    }
});

clearBtn.addEventListener("click", () => {
    //quick hack
    window.location.reload()
})