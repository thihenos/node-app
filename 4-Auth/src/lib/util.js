const mongoose = require('../models/mongoose')
const logger = require('../../server/logger')
const uniqid = require('uniqid')//Biblioteca para geração de ID's para os documentos do Firestore
const email = require('../../server/utils/functions/email/simpleEmail')
const asyncHandler = require('../helpers/asyncHandler')

const COLLECTION = 'Token'

const createTokenResetPassword = async (p_email) => {
  let v_token = uniqid()
  await mongoose.create(COLLECTION, {'email' : p_email, 'token' : v_token }).then((result) => {
	    logger.info('Token created successfully', { scope: 'firestore', payload: result })
	    //Enviando e-mail com o token
	    //email.sendTokenResetPassword(p_email, v_token)
  })
}

const deleteToken = async (id) => {
  await mongoose.destroy(COLLECTION, id)
  logger.info(`Document '${COLLECTION}/${id}' deleted!`, { scope: 'lib/utils/destroyDoc'})
}

const getAllOneFilter = asyncHandler( async filter => {
  return mongoose.getAllOneFilter(COLLECTION, filter)
})


module.exports = {
  createTokenResetPassword,
  deleteToken,
  getAllOneFilter
}