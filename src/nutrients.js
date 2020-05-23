class Nutrient {

  constructor(nutrient, nutrientAttributes) {
    this.id = nutrient.id
    this.type = nutrientAttributes.ntype
    this.name = nutrientAttributes.nname
    this.value = nutrientAttributes.nvalue
    this.unit = nutrientAttributes.nunit
    Nutrient.all.push(this)
  }

  renderNutrient() {
    return `
    `
  }
}

Nutrient.all = []
