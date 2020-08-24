const firestoreController = require('../models/firestoreController')
const logger = require('../../server/logger')

const COLLECTION = 'Dados'

const getAllDocs = async () => await firestoreController.getAll(COLLECTION)

const getOneDoc = async id => firestoreController.getOne(COLLECTION, id)

const createDoc = async ({name, age}) => firestoreController.create(COLLECTION, { 'nome': name, 'idade': age })

const destroyDoc = async id => {
  await firestoreController.destroy(COLLECTION, id)
  logger.info(`Document '${COLLECTION}/${id}' deleted!`, { scope: 'lib/tests/destroyDoc'})
}

module.exports = {
  getAllDocs,
  getOneDoc,
  createDoc,
  destroyDoc
}