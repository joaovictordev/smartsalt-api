'use strict'

const Saltern = use("App/Models/Saltern")
const User = use("App/Models/User")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with salterns
 */
class SalternController {
  /**
   * Show a list of all salterns.
   * GET salterns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

  }

  /**
   * Create/save a new saltern.
   * POST salterns
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const userId = auth.user.id

    const { is_admin } = await User.find(userId)

    if (is_admin) {
      const data = request.only(["name"])

      const saltern = await Saltern.create(data)

      return saltern
    } else {
      response.status(401).json({ message: "user not is admin"})
    }
  }

  /**
   * Display a single saltern.
   * GET salterns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update saltern details.
   * PUT or PATCH salterns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a saltern with id.
   * DELETE salterns/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SalternController
