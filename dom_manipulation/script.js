const colors = ["red", "green", "blue"]

document.querySelectorAll("div").forEach((el, index) => el.style.color = colors[index])


document.querySelectorAll("button").forEach((el) => {
    el.addEventListener("click", (e) => {
        el.parentElement.style.color = "red"
    })
})