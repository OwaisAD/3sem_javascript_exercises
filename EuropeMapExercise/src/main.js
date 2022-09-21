const parent = document.getElementById("parent")

const URL =  "http://restcountries.com/v3.1/alpha/";

parent.addEventListener('click', (event) => {
    const countryCode = event.target.id
    console.log(countryCode);
    fetchCountryInfo(URL, countryCode);
})


const fetchCountryInfo = (url , countryCode) => {
    fetch(`${url}${countryCode}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
