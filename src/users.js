const dri = "http://localhost:3000/dris"

class User {

  constructor(user, userAttributes) {
    this.id = user.id
    this.username = userAttributes.username
    this.dri_id = userAttributes.dri_id
    this.dri = {}

    User.all.push(this)
  }

  renderWelcome() {
    return `
      <div id="loggedIn">
      <h3>Welcome, ${this.username}!</h3>
      </div>
      `
  }

}



User.all = [];
