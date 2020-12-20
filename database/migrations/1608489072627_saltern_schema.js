'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalternSchema extends Schema {
  up () {
    this.create('salterns', (table) => {
      table.increments()
      table.string("name").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('salterns')
  }
}

module.exports = SalternSchema
