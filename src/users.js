class User {

  constructor(user, userAttributes) {
    this.id = user.id
    this.username = userAttributes.username
    User.all.push(this)
  }

  renderWelcome() {
    return `
      <div id="loggedIn">
      <h3>Welcome, ${this.username}!</h3>
      <button class="logout">Log Out</button>
      </div>
      `
  }

}

User.all = [];
