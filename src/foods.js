class Food {

  constructor(food, foodAttributes) {
    this.id = food.id
    this.name = foodAttributes.name
    this.size = foodAttributes.size
    Food.all.push(this)
  }

  renderFood()  {
    return `
    `
  }
}


Food.all = []
