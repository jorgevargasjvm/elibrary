'use strict'
// Instancias
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

/**
 * @name createToken
 * @description genera el secretToken del usuario
 * @param {*} user 
 */
function createToken (user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }

  return jwt.encode(payload, config.SECRET_TOKEN)
}

/**
 * @name decodeToken
 * @description descodifica el token y valida si este aun está activo
 * @param {*} token 
 */
function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN)

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        })
      }
      resolve(payload.sub)
    } catch (err) {
      reject({
        status: 500,
        message: 'Invalid Token'
      })
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}