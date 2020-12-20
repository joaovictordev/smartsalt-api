'use strict'

const Company  = use("App/Models/Company")

class CompanyController {
  async store({ request }) {
    const data = request.only(["name"])

    const company = await Company.create(data)

    return company
  }
}

module.exports = CompanyController
