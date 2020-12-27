'use strict'

const Schema = use('Schema')

class MemberSchema extends Schema {
  up () {
    this.create('members', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.integer('saltern_id').notNullable()
      table.timestamps()

      table.foreign('user_id').references('users.id').onDelete('cascade')
      table.foreign('saltern_id').references('salterns.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('members')
  }
}

module.exports = MemberSchema
