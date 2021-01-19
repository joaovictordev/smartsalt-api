'use strict'

const User = use('App/Models/User')

class MemberController {
  async add ({ request, response }) {
    const { user_id, saltern_id } = request.all()

    const user = await User.find(user_id)

    const res = await user.salterns().attach([saltern_id])

    if (res) {
      response.ok()
    } else {
      response.badRequest()
    }
  }

  async remove ({ request, response }) {
    const { user_id, saltern_id } = request.get()

    const user = await User.find(user_id)

    const res = await user
      .salterns()
      .detach([saltern_id])

    if (res) {
      response.ok()
    } else {
      response.badRequest()
    }
  }
}

module.exports = MemberController
