'use strict'

const Model = use('Model')

class Company extends Model {
  users() {
    return this.hasMany('App/Models/User')
  }

  salterns() {
    return this.hasMany('App/Models/Saltern')
  }
}

module.exports = Company
