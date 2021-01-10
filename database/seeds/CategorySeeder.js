'use strict'

const Category = use('App/Models/Category')

/*
|--------------------------------------------------------------------------
| PropertySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategorySeeder {
  async run () {
    const categoryData = [
      { name: 'Evaporador'},
      { name: 'Cristalizador'},
      { name: 'Pilha de sal'}
    ]

    await Category.createMany(categoryData)
  }
}

module.exports = CategorySeeder
