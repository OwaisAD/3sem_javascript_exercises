const buttons = document.querySelector("div#buttons")
const display = document.getElementById("display")
const calculateButton = document.getElementById("calculate")

buttons.addEventListener("click", (e) => {
    if(e.target.innerText === "=") return
    //display.innerText += e.target.innerText
    console.log(e.target.innerText)
})

calculateButton.addEventListener("click", (event) => {
    event.stopPropagation() //preventing this event from bubbling up to our "outer" event handler
    
})