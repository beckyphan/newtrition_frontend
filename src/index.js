const users = "http://localhost:3000/users"
const foods = "http://localhost:3000/api/v1/foods"
const nutrients = "http://localhost:3000/api/v1/nutrients"
const dailylogs = "http://localhost:3000/api/v1/dailylogs"


document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector("nav")
  const loginDiv = document.querySelector("#login")
  const loginSubmit = document.querySelector(".userLoginForm")
  const driReading = document.querySelector("#displayCurrentDri")
  const displayDailylogs = document.querySelector("#displayDailyLogs")

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
      driReading.innerHTML =
      `<h4>my daily value intake goals:</h4>`
      renderDri(loggedInUser)

      // if logged in, then render user's profile daily logs
      // show form to add foods for today
      // show nutrients consumed today
      // show nutrients needed today

    })

  })

  function renderDri(user) {
    const driDisplay = "http://localhost:3000/dris"
    fetch(`${driDisplay}/${user.dri_id}`)
    .then(resp => resp.json())
    .then(driProfile => {
      let profile = driProfile.data.attributes
      for (let [key, value] of Object.entries(profile)) {
        driReading.innerHTML +=
        `<span class="${key}-label">
            ${key}: ${value}
          </span><br>`
      }
    })

    addUnits()
  }

  // function to show user's daily logs - show most recent 3 days + addtoday if not already existing
  //  for all forms, user is able to add a food (by typing in) and it searches for the food
  // need to enter food & serving # => calculates the nutrient profile of the food based on the template
  //  needs to create a button that calulates how much the user has consumed & how much more needed
  // function renderDailyLogForm(user) {
  //
  // }


  function addUnits() {
    // get all elements with keys in DRI's and += appropriate addUnits
    let nutritionalLabels= {calories: "", fat: "g", sodium: "mg", potassium: "mg", carbohydrates: "g", protein: "g", vitaminA: "mcg", vitaminC: "mg", calcium: "mg", iron: "mg"}
    for (let [key, value] of Object.entries(nutritionalLabels)) {
      let className = `${key}-label`
      let label = document.getElementsByClassName(className)
      console.log(label)
      // label[0].innerHTML += ` ${value}`
    }

  }

});
