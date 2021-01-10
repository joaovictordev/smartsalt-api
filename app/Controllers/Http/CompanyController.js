'use strict'

const Company = use('App/Models/Company')

class CompanyController {
  async index ({ response }) {
    const companies = await Company.all()

    if (companies) {
      return companies
    } else {
      return response.badRequest()
    }
  }

  async show ({ params, response }) {

    const { id } = params

    const company = await Company.find(id)

    if (company) {
      return company
    } else {
      return response.badRequest()
    }
  }

  async store ({ request, response }) {
    const data = request
      .only([
        'name',
        'fantasy_name',
        'owner',
        'cnpj',
        'phone',
        'email'
      ])

    const company = await Company.create(data)

    if (company) {
      return response.created()
    } else {
      return response.badRequest()
    }
  }

  async update({ params, request, response }) {
    const { id } = params

    const company = await Company.find(id)

    const data = request
      .only([
        'name',
        'fantasy_name',
        'owner',
        'cnpj',
        'phone',
        'email'
      ])

    company.merge(data)

    const res = await company.save()

    if (res) {
      response.ok()
    } else {
      response.badRequest()
    }
  }

  async destroy ({ params, response }) {
    const { id } = params

    const company = await Company.find(id)

    company.delete()

    response.ok()
  }
}

module.exports = CompanyController
