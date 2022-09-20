const submitBtn = document.querySelector("form button")
const myNamesList = document.getElementById("list")
const myTable = document.getElementById("table")
const priceInput = document.getElementById("priceInput")
const priceButton = document.getElementById("priceButton")
const filterStatus = document.getElementById("filterStatus")
filterStatus.style.visibility = "hidden"
var names = ["Lars", "Peter", "Jan", "Bo", "Frederick"]

const createUlList = (namesList) => {
    var liNames = names.map(name => `<li>${name}</li>`)
    var myUlList = `<ul>${"\n"}${liNames.join("\n    ")}${"\n"}</ul>`
    //console.log(myUlList)
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



// exercise 4

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];

    const makeTable = (arr) => {
        const headers = arr.map(element => Object.keys(element))
        var tableHeaders = ``
        headers[0].forEach(header => tableHeaders+=`<th>${header.charAt(0).toUpperCase()+header.slice(1)}</th>`)
        console.log(tableHeaders)

        const rows = arr.map(element => Object.values(element))
        var tableRows = ``
        rows.forEach(element => {
            tableRows+=`<tr>`
            element.forEach(el => tableRows += `<th>${el}</th>`)
            tableRows+=`</tr>`})
        tableRows += `</tr>`
        console.log(tableRows)

        const table = `<table style="width: 50%"><tr>${tableHeaders}</tr>${tableRows}</table>`
        myTable.innerHTML = table
    }

    makeTable(cars)

    const myFilterFunction = (event) => {
        event.preventDefault()
        let carsTable = cars.filter(car => car.price < priceInput.value)
        console.log(carsTable)
        if(carsTable.length == 0) {
            filterStatus.style.visibility = "visible"
            return
        }
        filterStatus.style.visibility = "hidden"
        makeTable(carsTable)
    }