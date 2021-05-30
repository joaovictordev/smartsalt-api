'use strict'

const Measurement = use('App/Models/Measurement')

class MeasurementController {
  async store({ request, response }) {
    const { value, collected_at, station_id, property_id } = request.all()

    const measurement = await Measurement.create({
      value,
      collected_at,
      station_id,
      property_id
    })

    if (!measurement) {
      response.badRequest()
    }

    return measurement
  }

  async index({ request }) {
    const { stations, property_id, startDate, endDate } = request.get()

    const measurements = await Measurement
      .query()
      .where('property_id', property_id)
      .whereIn('station_id', stations)
      .whereBetween('collected_at', [startDate, endDate])
      .fetch()

    return measurements
  }
}

module.exports = MeasurementController
