'use strict'

const Schema = use('Schema')

class SalternSchema extends Schema {
  up () {
    this.create('salterns', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('company_id').notNullable()
      table.string('street')
      table.string('city')
      table.string('zipcode')
      table.string('neighborhood')
      table.string('state')
      table.string('number')
      table.string('phone').notNullable()
      table.string('email').notNullable()
      table.string('latitude').notNullable()
      table.string('longitude').notNullable()
      table.timestamps()

      table.foreign('company_id').references('companies.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('salterns')
  }
}

module.exports = SalternSchema
