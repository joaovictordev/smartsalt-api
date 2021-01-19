'use strict'

const Model = use('Model')

class Saltern extends Model {
  users() {
    return this.belongsToMany('App/Models/User')
      .pivotTable('members')
      .withTimestamps()
  }

  stations() {
    return this.hasMany('App/Models/Station')
  }
}

module.exports = Saltern
