document.querySelectorAll("div").forEach(
    (el) => el.addEventListener("click", () => {
    console.log(`Hi from ${el.idg}`)
}))