'use strict'

const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('fantasy_name')
      table.string('cnpj')
      table.string('owner')
      table.string('phone').notNullable()
      table.string('email').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
