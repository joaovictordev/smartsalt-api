'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('company_id').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.boolean('is_admin').notNullable().defaultTo(false)
      table.timestamps()

      table.foreign('company_id').references('companies.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
