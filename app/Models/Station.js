'use strict'

const Model = use('Model')

class Station extends Model {
  properties() {
    return this.belongsToMany('App/Models/Property')
      .pivotTable('measurements')
      .withTimestamps()
      .withPivot(['value', 'collected_at'])
  }

  category () {
    return this.belongsTo('App/Models/Category')
  }
}

module.exports = Station
