'use strict'

const Model = use('Model')

class Property extends Model {
  stations() {
    return this.belongsToMany('App/Models/Station')
      .pivotTable('measurements')
      .pivotModel('App/Models/Measurement')
  }
}

module.exports = Property
