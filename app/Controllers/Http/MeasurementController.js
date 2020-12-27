'use strict'

const Measurement = use('App/Models/Measurement')

class MeasurementController {
  async store({ request }) {
    const data = request.only(['value', 'collected_at', 'station_id', 'property_id'])

    const measurement = Measurement.create(data)

    return measurement
  }
}

module.exports = MeasurementController
