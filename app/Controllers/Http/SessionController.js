'use strict'

class SessionController {
  async storeUser({ auth, request }) {
    const { email, password } = request.all()

    const { token } = await auth
      .authenticator('user')
      .attempt(email, password)

    return { token }
  }

  async storeAdmin({ auth, request }) {
    const { email, password } = request.all()

    const { token } = await auth
      .authenticator('admin')
      .attempt(email, password)

    return { token }
  }
}

module.exports = SessionController
