const firestoreController = require('../models/firestoreController')
const logger = require('../../server/logger')

const COLLECTION = 'Token'

const getAllDocs = async () => await firestoreController.getAll(COLLECTION)

const getAllOneFilter = async filter => firestoreController.getAllOneFilter(COLLECTION, filter)

const getOneDoc = async id => firestoreController.getOne(COLLECTION, id)

const createDoc = async (body) => firestoreController.create(COLLECTION, body)

const updateDoc = async (body, id) => firestoreController.update(COLLECTION, body, id)

const destroyDoc = async id => {
  await firestoreController.destroy(COLLECTION, id)
  logger.info(`Document '${COLLECTION}/${id}' deleted!`, { scope: 'lib/funcionario/destroyDoc'})
}

module.exports = {
  getAllDocs,
  getAllOneFilter,
  getOneDoc,
  createDoc,
  updateDoc,
  destroyDoc
}