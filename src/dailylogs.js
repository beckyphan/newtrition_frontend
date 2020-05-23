class Dailylog {

  constructor(dailylog, dailylogAttributes) {
    this.id = dailylog.id
    this.date = dailylogAttributes.date
    Dailylog.all.push(this)
  }

  renderLog() {
    return `

      `
  }
}


Dailylog.all = []
