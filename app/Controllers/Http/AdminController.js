'use strict'

const Admin = use('App/Models/Admin')

class AdminController {
  async show ({ params }) {
    const { id } = params
    const admin = await Admin.find(id)
    return admin
  }
}

module.exports = AdminController
