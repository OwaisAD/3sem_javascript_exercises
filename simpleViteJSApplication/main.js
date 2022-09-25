import "./style.css";
import jokeFacade from "./jokeFacade";
import userFacade from "./userFacade";
document.getElementById("all-content").style.display = "block";


/*
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/*******************************************/
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


/*******************************************/
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
      })
  }, 30000)
}

document.getElementById("cnQuoteBtn").addEventListener("click", () => {
  getOneChuckNorrisQuote()
  document.getElementById("cnQuoteBtn").disabled = true
})


/*******************************************/
/* JS For Exercise-3 below */

const errorMessages = document.getElementById("errors")

// get all users function
const getAllUsers = () => {
  userFacade.getAllUsers()
    .then(users => {
      const arr = users.map(row =>
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
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => errorMessages.innerText = e.msg)
      } else {
        errorMessages.innerText = "Network error"
      }
    })
}
getAllUsers()


// show a single user, given an id
const inputUserId = document.getElementById("findUser")
const searchUserBtn = document.getElementById("searchUserBtn")
let foundUser = ``

searchUserBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const id = inputUserId.value
  console.log("looking for user with id:", id)
  userFacade.getUserById(id)
    .then(user => {
      foundUser = `Name: ${user.name}
      Age: ${user.age}
      Gender: ${user.gender}
      Email: ${user.email}`

      document.getElementById("editUserId").value = `${user.id}`
      document.getElementById("editAgeInput").value = `${user.age}`
      document.getElementById("editNameInput").value = `${user.name}`
      document.getElementById("editGenders").value = `${user.gender}`
      document.getElementById("editEmailInput").value = `${user.email}`
      document.getElementById("userFound").innerText = foundUser
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => errorMessages.innerText = e.msg)
      } else {
        errorMessages.innerText = "Network error"
      }
    })
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

  //console.log(`age: ${inputAge} name: ${inputName} gender: ${inputGender} email: ${inputEmail}`)
  // instead of simply console logging as above, we can make a user object and then print the object
  const user = {
    "age": inputAge,
    "name": inputName,
    "gender": inputGender,
    "email": inputEmail
  }
  console.log("New user", user)

  userFacade.addUser(user)
    .then(user => {
      addedUserStatus.innerText = "Added user: " + JSON.stringify(user)
      getAllUsers()
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => errorMessages.innerText = e.msg)
      } else {
        errorMessages.innerText = "Network error"
      }
    })
  // const rawResponse = fetch('http://localhost:3333/api/users', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     "age": inputAge,
  //     "name": inputName,
  //     "gender": inputGender,
  //     "email": inputEmail
  //   })
  // });

  document.getElementById("ageInput").value = ""
  document.getElementById("nameInput").value = ""
  document.getElementById("genders").value = ""
  document.getElementById("emailInput").value = ""

  setTimeout(() => {
    addedUserStatus.innerText = ""
  }, 5000)
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

  const user = {"age":editInputAge, "name":editInputName, "gender":editInputGender, "email":editInputEmail}

  userFacade.updateUser(editUserId, user)
    .then(user => {
      editedUserStatus.innerText = "Updated user: " + JSON.stringify(user)
      getAllUsers()
    })
    .catch(err => {
      if(err.status) {
        err.fullError.then(e => errorMessages.innerText = e.msg)
      } else {
        errorMessages.innerText = "Network error"
      }
    })

  setTimeout(() => {
    editedUserStatus.innerText = ""
  }, 5000)
})


// delete an existing user
const deleteUserBtn = document.getElementById("deleteBtn")
const deleteStatus = document.getElementById("deleteStatus")
deleteUserBtn.addEventListener("click", (event) => {
  event.preventDefault()
  let userToDeleteId = document.getElementById("deleteId").value

  userFacade.deleteUser(userToDeleteId)
    .then(user => {
      deleteStatus.innerText = "Succesfully deleted user with id " + userToDeleteId
      getAllUsers()
    })
    .catch(err => {
      if(err.status) {
        err.fullError.then(e => errorMessages.innerText = e.msg)
      } else {
        errorMessages.innerText = "Network error"
      }
    })
    
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