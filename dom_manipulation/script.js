const colors = ["red", "green", "blue"]

document.querySelectorAll("div").forEach((el, index) => el.style.color = colors[index])

document.querySelectorAll("button").forEach((el) => {
    el.addEventListener("click", () => {
        el.parentElement.style.color = colors[Math.floor(Math.random()*colors.length)]
    })
})

