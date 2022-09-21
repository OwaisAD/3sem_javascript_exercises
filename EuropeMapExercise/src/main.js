
const URL =  "http://restcountries.com/v3.1/alpha/";

document.querySelector("#parent").addEventListener('click', (event) => {
    const countryCode = event.path[0].id
    console.log(countryCode);
    fetchCountryInfo(URL, countryCode);
})



const fetchCountryInfo = (url , countryCode) => {
    fetch(`${url}${countryCode}`, {
        headers : {
            "Access-Control-Allow-Origin": "*"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch( error => console.log(error))
}
