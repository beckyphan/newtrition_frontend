class Nutrientprofile {

  constructor(nutrientprofile, nutrientprofileAttributes) {
    this.id = nutrientprofile.id
    this.type = nutrientprofileAttributes.ntype
    this.name = nutrientprofileAttributes.nname
    this.value = nutrientprofileAttributes.nvalue
    this.unit = nutrientprofileAttributes.nunit
    Nutrientprofile.all.push(this)
  }

  renderNutrientprofile() {
    return `
    `
  }
}

Nutrientprofile.all = []
