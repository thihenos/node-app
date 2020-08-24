const firestoreController = require('../models/firestoreController')
const logger = require('../../server/logger')

const COLLECTION = 'Usuario'

const getDocSubCollection = async id => await firestoreController.getDocSubCollection(COLLECTION, id)

module.exports = {
  getDocSubCollection
}