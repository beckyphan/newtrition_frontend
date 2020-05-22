const users = "http://localhost:3000/users"
const foods = "http://localhost:3000/api/v1/foods"
const nutrients = "http://localhost:3000/api/v1/nutrients"
const dailylogs = "http://localhost:3000/api/v1/dailylogs"


document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector("nav")
  const loginDiv = document.querySelector("#login")
  const loginSubmit = document.querySelector(".userLoginForm")

  loginSubmit.addEventListener("submit", (e) => {
    e.preventDefault()

    let passwordValue = document.querySelector("#password").value
    let usernameValue = document.querySelector("#username").value

    let formData = {
      username: usernameValue,
      password: passwordValue
    }

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(users, configObj)
    .then(resp => resp.json())
    .then(user => {
      let loggedInUser = new User(user.data, user.data.attributes)
      nav.innerHTML = loggedInUser.renderWelcome()
    })
  })

});
