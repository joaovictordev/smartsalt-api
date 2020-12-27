'use strict'

const Hash = use('Hash')

const Route = use('Route')

Route.get('hashs', async () => {
  const hash = await Hash.make('test')

  return { hash }
})

// ------------------------------------------------

Route.post('sessions', 'SessionController.store')

Route.resource('users', 'UserController')
  .only(['index', 'store', 'update', 'destroy'])
  .middleware('auth')

Route.put('passwords/:id', 'PasswordController.update')
  .middleware('auth')

Route.resource('salterns', 'SalternController')
  .only(['store', 'update'])
  .middleware(['auth'])

Route.resource('stations', 'StationController')
  .only(['store', 'update', 'destroy'])
  .middleware(['auth'])

Route.resource('measurements', 'MeasurementController')
  .only(['index', 'store'])
  .middleware(['auth'])
