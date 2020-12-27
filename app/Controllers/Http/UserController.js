'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const { name, email, password, company_id, salterns } = request.all()

    const user = await User.create({ name, email, password, company_id })

    if (user) {
      if (salterns.length > 0) {
        await user.salterns().attach(salterns)
      }

      response.created()
    } else {
      response.badRequest()
    }
  }

  async update({ params, request, response }) {
    const { id } = params

    const user = await User.find(id)

    const { name, email } = request.all()

    user.merge({ name, email })

    const res = await user.save()

    if (res) {
      response.ok()
    } else {
      response.badRequest()
    }
  }

  async destroy({ params, response }) {
    const { id } = params

    const user = await User.find(id)

    user.delete()

    response.ok()
  }
}

module.exports = UserController
