'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async index ({ response }) {
    const categories = await Category.all()

    if (categories) {
      return categories
    } else {
      return response.badRequest()
    }
  }
}

module.exports = CategoryController
