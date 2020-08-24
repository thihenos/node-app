const firestoreController = require('../models/firestoreController')
const logger = require('../../server/logger')

const COLLECTION = 'Funcionario'

const getAllDocs = async () => await firestoreController.getAll(COLLECTION)

const getOneDoc = async id => firestoreController.getOne(COLLECTION, id)

const createDoc = async (body) => firestoreController.create(COLLECTION, body)

const updateDoc = async (body, id) => firestoreController.update(COLLECTION, body, id)

const destroyDoc = async id => {
  await firestoreController.destroy(COLLECTION, id)
  logger.info(`Document '${COLLECTION}/${id}' deleted!`, { scope: 'lib/funcionario/destroyDoc'})
}

const getAllOneFilter =  async filter => {
  return firestoreController.getAllOneFilter(COLLECTION, filter)
}

module.exports = {
  getAllDocs,
  getOneDoc,
  createDoc,
  updateDoc,
  destroyDoc,
  getAllOneFilter
}