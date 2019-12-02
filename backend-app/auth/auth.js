'use strict'
/**
 * @description funcion que valida si la persona que está intentando acceder a la plataforma tiene la autorizacion
 * y / o tiene un usuario registrado en el sistema y si este usuario es valido/
 */
const services = require('../services')

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorización' })
  }

  const token = req.headers.authorization.split(' ')[1]

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = isAuth