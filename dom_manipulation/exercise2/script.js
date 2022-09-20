/*document.querySelectorAll("div").forEach(
    (el) => el.addEventListener("click", () => {
    console.log(`Hi from ${el.id}`)
}))*/

const paragraph = document.getElementById("para")
document.querySelector("div#outer").addEventListener("click", (e) => {
    //console.log(`${e.target.id}`)
    para.innerText += ` ${e.target.id}`
})