'use strict'

const Model = use('Model')

const Hash = use('Hash')

class Admin extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  adminTokens () {
    return this.hasMany('App/Models/AdminToken')
  }
}

module.exports = Admin
