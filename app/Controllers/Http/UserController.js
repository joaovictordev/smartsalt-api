'use strict'

const User = use("App/Models/User")

class UserController {
  async store({ request }) {
    const data = request.only(["name", "email", "password", "is_admin", "company_id"])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
