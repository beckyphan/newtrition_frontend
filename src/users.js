class User {

  constructor(user, userAttributes) {
    this.id = user.id
    this.username = userAttributes.username
    this.dri = []
    // need to import in corresponding dri attributes
    User.all.push(this)
  }

  renderWelcome() {
    return `
      <div id="loggedIn">
      <h3>Welcome, ${this.username}!</h3>
      </div>
      `
  }

  renderDri() {
    let driCard = document.createElement('div')
    driCard.class = `dri-${this.dri.id}`
    for (const attribute of this.dri) {
      driCard.innerHTML +=
        `
        <span>
        ${this.dri}
        </span>
        `
    }
  }

}

User.all = [];
