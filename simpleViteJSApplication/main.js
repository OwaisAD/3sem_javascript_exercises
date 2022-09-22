import "./style.css";
import jokeFacade from "./jokeFacade";
document.getElementById("all-content").style.display = "block";

/*
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
const makeListItems = () => {
  const jokes = jokeFacade.getJokes()
  const jokeList = document.getElementById("jokes")
  jokeList.innerHTML = jokes.map((joke) => `<li>${joke}</li>`).join("")
}
makeListItems()


const inputJokeId = document.getElementById("inputJokeId")
const jokeBtn = document.getElementById("getJoke")
const foundJoke = document.getElementById("joke")


jokeBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const joke = `<li>${jokeFacade.getJokeById(inputJokeId.value-1)}</li>`
  foundJoke.innerHTML = joke
})


const inputJokeText = document.getElementById("inputJokeText")
const addJokeBtn = document.getElementById("addJoke")
const status = document.getElementById("message")

addJokeBtn.addEventListener("click", (event) => {
  event.preventDefault()
  if (inputJokeText.value === "") {
    status.innerHTML = "Please add a joke"
    return
  }
  jokeFacade.addJoke(inputJokeText.value)
  //console.log(jokeFacade.getJokes())
  makeListItems()
  status.innerHTML = "Succesfully added a new joke"
})




/* JS For Exercise-2 below */
const getOneChuckNorrisQuote = () => {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("cnQuote").innerText = `${data.value}`
    })
    getChuckNorrisQuoteEveryMinute()
}

const getChuckNorrisQuoteEveryMinute = () => {
  setInterval(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("cnQuote").innerText = `${data.value}`
  })}, 30000)
}

document.getElementById("cnQuoteBtn").addEventListener("click", () => {
  getOneChuckNorrisQuote()
  document.getElementById("cnQuoteBtn").disabled = true
})


/* JS For Exercise-3 below */

// get all users function
const getAllUsers = () => {
  fetch(`http://localhost:3333/api/users`)
    .then(res => res.json())
    .then(data => {
      const arr = data.map(row => 
        `<tr>
        <th>${row.id}</th>
        <th>${row.age}</th>
        <th>${row.name}</th>
        <th></th>
        <th>${row.gender}</th>
        <th>${row.email}</th>
      </tr>`).join("")
      document.getElementById("tableBody").innerHTML = arr
    })
}
getAllUsers()


// show a single user, given an id
const inputUserId = document.getElementById("findUser")
const searchUserBtn = document.getElementById("searchUserBtn")
let user = ``

searchUserBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const id = inputUserId.value
  fetch(`http://localhost:3333/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      user = `Name: ${data.name}<br>
      Age: ${data.age}<br>
      Gender: ${data.gender}<br>
      Email: ${data.email}`
      })
  document.getElementById("foundUser").innerHTML = user
})


// add a new user
const addUserBtn = document.getElementById("addUserBtn")
const addedUserStatus = document.getElementById("addedUserStatus")
addUserBtn.addEventListener("click", (event) => {
  event.preventDefault()
  let inputAge = document.getElementById("ageInput").value
  let inputName = document.getElementById("nameInput").value
  let inputGender = document.getElementById("genders").value
  let inputEmail = document.getElementById("emailInput").value

  console.log(`age: ${inputAge} name: ${inputName} gender: ${inputGender} email: ${inputEmail}`)


  const rawResponse = fetch('http://localhost:3333/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"age": inputAge, "name":inputName, "gender":inputGender, "email":inputEmail})
  });
  //const content = rawResponse.json();
  //console.log(content);
  //console.log(JSON.stringify(rawResponse)) // this doesn't work
  addedUserStatus.innerText = "Successfully added person"
})


// edit an existing user
const editUserBtn = document.getElementById("editUserBtn")
const editedUserStatus = document.getElementById("editedUserStatus")
editUserBtn.addEventListener("click", (event) => {
  event.preventDefault()
  let editUserId = document.getElementById("editUserId").value
  let editInputAge = document.getElementById("editAgeInput").value
  let editInputName = document.getElementById("editNameInput").value
  let editInputGender = document.getElementById("editGenders").value
  let editInputEmail = document.getElementById("editEmailInput").value

  console.log(`age: ${editInputAge} name: ${editInputName} gender: ${editInputGender} email: ${editInputEmail}`)


  const rawResponse = fetch(`http://localhost:3333/api/users/${editUserId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"age": editInputAge, "name":editInputName, "gender":editInputGender, "email":editInputEmail})
  });
  //const content = rawResponse.json();
  //console.log(content);
  //console.log(JSON.stringify(rawResponse)) // this doesn't work
  editedUserStatus.innerText = "Successfully edited person"
})


// delete an existing user
const deleteUserBtn = document.getElementById("deleteBtn")
const deleteStatus = document.getElementById("deleteStatus")
deleteUserBtn.addEventListener("click", (event) => {
  event.preventDefault()
  let userToDeleteId = document.getElementById("deleteId").value
  const rawResponse = fetch(`http://localhost:3333/api/users/${userToDeleteId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  //const content = rawResponse.json();
  //console.log(content);
  //console.log(JSON.stringify(rawResponse)) // this doesn't work
  deleteStatus.innerText = "Successfully deleted person"
  setTimeout(() => {
    deleteStatus.innerText = ""
  }, 5000)
})


/*
 If you do not understand the code below, don´t worry, it is not necessary for completing the exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none";
  document.getElementById("ex1_html").style = "display:none";
  document.getElementById("ex2_html").style = "display:none";
  document.getElementById("ex3_html").style = "display:none";
  document.getElementById(idToShow).style = "display:block";
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1":
      hideAllShowOne("ex1_html");
      break;
    case "ex2":
      hideAllShowOne("ex2_html");
      break;
    case "ex3":
      hideAllShowOne("ex3_html");
      break;
    default:
      hideAllShowOne("about_html");
      break;
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");