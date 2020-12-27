'use strict'

const User = use('App/Models/User')

class PasswordController {
  async update({ params, request, response }) {
    const { id } = params

    const { password, passwordVerify } = request.all()

    if (( password.legth > 0 && passwordVerify > 0)){
      if (password === passwordVerify) {
        const user = User.find(id)

        user.merge({ password })

        await user.save()

        response.ok()
      } else {
        response.badRequest()
      }
    } else {
      response.badRequest()
    }
  }
}

module.exports = PasswordController
