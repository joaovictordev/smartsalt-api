'use strict'

const Saltern = use('App/Models/Saltern')

class SalternController {
  async show ({ params, response }) {
    const { id } = params

    const saltern = await Saltern.find(id)

    if (saltern) {
      return saltern
    } else {
      return response.badRequest()
    }
  }

  async store({ request, response }) {
    const data = request.only([
      'company_id',
      'name',
      'street',
      'city',
      'neighborhood',
      'zipcode',
      'state',
      'number',
      'latitude',
      'longitude',
      'phone',
      'email'
    ])

    const saltern = await Saltern.create(data)

    if (!saltern) {
      response.badRequest()
    }

    return saltern
  }

  async update({ params, request, response }) {
    const { id } = params

    const saltern = await Saltern.find(id)

    const data = request.only([
      'name',
      'street',
      'city',
      'neighborhood',
      'zipcode',
      'state',
      'number',
      'latitude',
      'longitude',
      'phone',
      'email'
    ])

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
