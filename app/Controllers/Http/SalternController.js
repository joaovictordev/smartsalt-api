'use strict'

const Saltern = use('App/Models/Saltern')

class SalternController {
  async store({ request, response }) {
    const data = request.only(['name', 'company_id'])

    const saltern = await Saltern.create(data)

    if (saltern) {
      response.created()
    } else {
      response.badRequest()
    }
  }

  async update({ params, request, response }) {
    const { id } = params

    const saltern = await Saltern.find(id)

    const data = request.only(['name'])

    saltern.merge(data)

    const res = await saltern.save()

    if (res) {
      response.ok()
    } else {
      response.badRequest()
    }
  }

  async destroy({ params, response }) {
    const { id } = params

    const saltern = await Saltern.find(id)

    saltern.delete()

    response.ok()
  }
}

module.exports = SalternController
