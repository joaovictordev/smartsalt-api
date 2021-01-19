'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnInStationSchema extends Schema {
  up () {
    this.alter('stations', (table) => {
      table.integer('category_id').notNullable()

      table.foreign('category_id').references('categories.id').onDelete('cascade')
    })
  }

  down () {
    this.alter('stations', (table) => {
      table.dropColumn('category_id')
    })
  }
}

module.exports = AddColumnInStationSchema
