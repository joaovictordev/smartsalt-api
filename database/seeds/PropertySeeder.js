'use strict'

const Property = use('App/Models/Property')

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

class PropertySeeder {
  async run () {
    const propertyData = [
      { name: 'Densidade', unit: 'ºBé'},
      { name: 'Nível da água', unit: 'm'}
    ]

    const properties = await Property.createMany(propertyData)

    console.log(properties)
  }
}

module.exports = PropertySeeder
