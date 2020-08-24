const mongooseController = require('../models/mongoose')
const logger = require('../../server/logger')

const COLLECTION = 'Users'

const createDoc = async data => {
  const doc = await mongooseController.create(COLLECTION, data);
  return doc
}

module.exports = {
	createDoc,
}