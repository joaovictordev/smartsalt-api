'use strict'

const Schema = use('Schema')

class SalternSchema extends Schema {
  up () {
    this.create('salterns', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('company_id').notNullable()
      table.integer('street')
      table.integer('city')
      table.integer('cep')
      table.integer('neighborhood')
      table.integer('state')
      table.integer('number')
      table.integer('phone').notNullable()
      table.integer('email').notNullable()
      table.integer('latitude').notNullable()
      table.integer('longitude').notNullable()
      table.timestamps()

      table.foreign('company_id').references('companies.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('salterns')
  }
}

module.exports = SalternSchema
