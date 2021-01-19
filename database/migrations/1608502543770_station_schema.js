'use strict'

const Schema = use('Schema')

class StationSchema extends Schema {
  up () {
    this.create('stations', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.decimal('area').notNullable()
      table.string('latitude').notNullable()
      table.string('longitude').notNullable()
      table.integer('saltern_id').notNullable()
      table.timestamps()

      table.foreign('saltern_id').references('salterns.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('stations')
  }
}

module.exports = StationSchema
