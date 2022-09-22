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
      if(inputJokeText.value === "") {
        status.innerHTML = "Please add a joke"
        return
      }
      jokeFacade.addJoke(inputJokeText.value)
      //console.log(jokeFacade.getJokes())
      makeListItems()
      status.innerHTML = "Succesfully added a new joke"
  })



/* JS For Exercise-2 below */

/* JS For Exercise-3 below */

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