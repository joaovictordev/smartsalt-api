'use strict'

const Station = use('App/Models/Station')

class StationController {
  async index({ request }) {
    const { saltern_id } = request.get()

    const stations = await Station
      .query()
      .where('saltern_id', saltern_id)
      .fetch()

    return stations
  }

  async store({ request, response }) {
    const data = request.only(['name', 'area', 'latitude', 'longitude', 'saltern_id'])

    const station = await Station.create(data)

    if (station) {
      response.created()
    } else {
      response.badRequest()
    }
  }

  async update({ params, request, response }) {
    const { id } = params

    const station = await Station.find(id)

    const data = request.only(['name', 'area', 'latitude', 'longitude'])

    station.merge(data)

    const res = await station.save()

    if (res) {
      response.ok()
    } else {
      response.badRequest()
    }
  }

  async destroy({ params, response }) {
    const { id } = params

    const station = await Station.find(id)

    station.delete()

    response.ok()
  }
}

module.exports = StationController
