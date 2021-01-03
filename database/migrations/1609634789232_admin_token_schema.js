'use strict'

const Schema = use('Schema')

class AdminTokensSchema extends Schema {
  up () {
    this.create('admin_tokens', (table) => {
      table.increments()
      table.integer('admin_id').unsigned().references('admins.id')
      table.string('token').notNullable().unique().index()
      table.string('type').notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('admin_tokens')
  }
}

module.exports = AdminTokensSchema
