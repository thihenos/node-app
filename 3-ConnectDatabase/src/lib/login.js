const mongooseController = require('../models/mongoose')
const logger = require('../../server/logger')
const jwt = require('../../server/utils/functions/jwt')
const crypt = require('../../server/utils/functions/crypt')

const COLLECTION = 'Users'

const userInvalid = (username) => {
  logger.info('Mobile User Token Invalid', { scope: 'lib/login', payload: { username }})
  throw new Error('TOKEN_INVALID')
}

const getAllOneFilter = async filter => mongooseController.getAllOneFilter(COLLECTION, filter)

const getAllManyFilter = async filter => mongooseController.getAllManyFilter(COLLECTION, filter)

const checkUser = async (body) => {

  const filter = [{ 'column' : 'username', 'value' : body.username }]
  const doc = await mongooseController.getAllFilter(COLLECTION, filter);
  if (doc.length == 0) return false
  return await jwt.createToken(doc._id, doc.email)
  //return await jwt.verifyToken(token)
}

const checkToken = async (token) => jwt.verifyToken(token)

module.exports = {
  getAllOneFilter,
  checkUser,
  getAllManyFilter,
  checkToken
}
