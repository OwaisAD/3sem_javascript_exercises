const text = document.getElementById("text")
const personInput = document.getElementById("person_id")
const personBtn = document.getElementById("person_id_button")
const personData = document.getElementById("persondata")
const allPersonsBtn = document.getElementById("allPersons")
const personsData = document.getElementById("personsData")

text.innerText = "her er lidt tekst"

setTimeout(() => {
    text.innerText = "Nu er der gået 2 sekunder"
}, 2000)

text.innerText = "her er der noget mere tekst"

// ------------------


const renderPerson = (json) => {
    return `<h2>Personal Data</h2>
        Name: ${json.name} <br/>
        Email: ${json.email} <br/>
        Address: ${json.address.street} <br/>
        City: ${json.address.city} <br/>
        Phone: ${json.phone}
    `
}

const renderAllPersons = (json) => {
    const allPersonsTableHeader = `<h2>Personal Data</h2>
    <tr>
        <th style="width:30px; text-align:center;">id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>City</th>
        <th>Phone</th>
    </tr>`
    const allPersonsTable = json.map((data) => `
    <tr>
        <td style="text-align:center;">${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.address.street}</td>
        <td>${data.address.city}</td>
        <td>${data.phone}</td>
    </tr>`).join("")
    return `${allPersonsTableHeader}${allPersonsTable}`
}

personBtn.addEventListener("click", () => {
    const id = personInput.value
    personData.innerText = "ID: " + id
    // fetch data fra person api
    const url = "https://jsonplaceholder.typicode.com/users/" + id
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Inside this callback, AND ONLY HERE the response data is available
            console.log("data", data);
            /* data now contains the response*/
            personsData.innerHTML = ""
            personData.innerHTML = renderPerson(data)
        })
})

allPersonsBtn.addEventListener("click", () => {
    const url2 = "https://jsonplaceholder.typicode.com/users"
    fetch(url2)
        .then((response) => response.json())
        .then((data) => {
            personData.innerHTML = ""
            personsData.innerHTML = renderAllPersons(data)
        })
})