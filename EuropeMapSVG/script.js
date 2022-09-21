const parentContainer = document.getElementById("parent")
const info = document.getElementById("countryInfo")
const resetBtn = document.getElementById("resetBtn")
let lastCountry = ""

parentContainer.addEventListener("click", (event) => {
    const countryId = event.target.id

    if(lastCountry !== "") {
        console.log("Last country:", lastCountry)
        document.getElementById(lastCountry).setAttribute("style", "fill:#c0c0c0")
    }
    event.target.setAttribute("style", "fill:red")

    lastCountry = countryId

    fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
        .then(response => response.json())
        .then(data => {
            const currencyArray = Object.values(data[0].currencies)

            const country = `<tr><td>Name: ${data[0].name.common}</td></tr>
                             <tr><td>Flag: ${data[0].flag}</td></tr>
                             <tr><td>Population: ${data[0].population}</td></tr>
                             <tr><td>Driving side: ${data[0].car.side}</td></tr>
                             <tr><td>Area: ${data[0].area}</td></tr>
                             <tr><td>Borders: ${data[0].borders.join(", ")}</td></tr>
                             <tr><td>Currency: ${currencyArray[0].name}</td></tr>
             
            `
            info.innerHTML = country
        })
})

resetBtn.addEventListener("click", () => {
    window.location.reload()
})