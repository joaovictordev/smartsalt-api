'use strict'

const Hash = use('Hash')

const Route = use('Route')

Route.get('hashs', async () => {
  const hash = await Hash.make('test')

  return { hash }
})

// ------------------------------------------------

Route.post('sessions', 'SessionController.storeUser')
Route.post('admin/sessions', 'SessionController.storeAdmin')

// ----------- User -------------------------------

Route.resource('users', 'UserController')
  .only(['update', 'show'])
  .middleware(['auth:user'])

Route.resource('salterns', 'SalternController')
  .only(['index'])
  .middleware(['auth:user'])

Route.resource('measurements', 'MeasurementController')
  .only(['index', 'store'])
  .middleware(['auth:user'])

// ----------- Admin -------------------------------
Route.resource('users', 'UserController')
  .only(['index', 'store', 'update', 'destroy'])
  .middleware(['auth:admin'])

Route.resource('companies', 'CompanyController')
  .apiOnly()
  .middleware(['auth:admin'])

Route.resource('salterns', 'SalternController')
  .only(['show', 'store', 'update', 'destroy'])
  .middleware(['auth:admin'])

Route.resource('stations', 'StationController')
  .only(['index','store', 'update', 'destroy'])
  .middleware(['auth:admin'])

Route.resource('categories', 'CategoryController')
  .only(['index'])
  .middleware(['auth:admin'])

Route.post('members', 'MemberController.add')
  .middleware(['auth:admin'])

Route.delete('members', 'MemberController.remove')
  .middleware(['auth:admin'])
