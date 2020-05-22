const users = "http://localhost:3000/users"
const foods = "http://localhost:3000/api/v1/foods"
const nutrients = "http://localhost:3000/api/v1/nutrients"
const dailylogs = "http://localhost:3000/api/v1/dailylogs"


document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector("nav")
  const loginDiv = document.querySelector("#login")
  const loginSubmit = document.querySelector("#loginSubmit")

  UserLogin()

  function loginSubmit.addEventListenern("submit", (e) => {
    e.preventDefault()
    let bodyData = {
      username,
      password
    }
    fetch(users, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(resp => resp.json())
    .then(json => {

      // nav.innerHTML = renderLogin()

    })
  }


});
