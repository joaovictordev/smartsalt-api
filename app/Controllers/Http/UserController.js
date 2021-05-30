'use strict'

const User = use('App/Models/User')
const Saltern = use('App/Models/Saltern')

class UserController {
  async index ({ request }) {
    const { company_id, saltern_id } = request.get()

    const saltern = await Saltern.find(saltern_id)

    const members = await saltern
      .users()
      .wherePivot('saltern_id', saltern_id)
      .fetch()

    const membersID = members.toJSON().map(member => member.id)

    const availables = await User
      .query()
      .where('company_id', company_id)
      .whereNotIn('id', membersID)
      .fetch()

    return { members, availables }
  }

  async store({ request, response }) {
    const { name, email, password, company_id, saltern_id } = request.all()

    const user = await User.create({ name, email, password, company_id })

    await user.salterns().attach([saltern_id])

    if (!user) {
      response.badRequest()
    }

    return user
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
