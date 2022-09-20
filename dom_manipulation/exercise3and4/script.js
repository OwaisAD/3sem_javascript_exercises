const submitBtn = document.querySelector("form button")
const myNamesList = document.getElementById("list")
var names = ["Lars", "Peter", "Jan", "Bo", "Frederick"]

const createUlList = (namesList) => {
    var liNames = names.map(name => `<li>${name}</li>`)
    var myUlList = `<ul>${"\n"}${liNames.join("\n    ")}${"\n"}</ul>`
    console.log(myUlList)
    myNamesList.innerHTML = myUlList
}

createUlList(names)

const addName = (event) => {
    event.preventDefault()
    var name = document.getElementById("nameInput").value;
    if(name.length === 0) {
        return
    }
    names.push(name)
    createUlList()
}

const removeFirst = (event) => {
    event.preventDefault()
    names.shift()
    createUlList(names)
}

const removeLast = (event) => {
    event.preventDefault()
    names.pop()
    createUlList(names)
}
