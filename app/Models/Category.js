'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  stations() {
    return this.hasMany('App/Models/Station')
  }
}

module.exports = Category
