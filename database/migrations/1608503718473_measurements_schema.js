'use strict'

const Schema = use('Schema')

class MeasurementsSchema extends Schema {
  up () {
    this.create('measurements', (table) => {
      table.increments()
      table.integer('station_id').notNullable()
      table.integer('property_id').notNullable()
      table.decimal('value').notNullable()
      table.datetime('collected_at').defaultTo(this.fn.now()).notNullable()
      table.timestamps()

      table.foreign('station_id').references('stations.id').onDelete('cascade')
      table.foreign('property_id').references('properties.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('measurements')
  }
}

module.exports = MeasurementsSchema
