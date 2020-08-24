const firestoreController = require('../models/firestoreController')
const logger = require('../../server/logger')

const COLLECTION = 'Usuario'

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

/* Função: updateDocSubCollection
 * Desc: Função criada para armazenar documentos dentro de um estrutura document/collection
 * Params:
 	- body - contendo as informações do req.body
 	- entity - nome da entidade que está utilizada, por exemplo 'notificacao'
 	- id - do documento do principal
 */
const updateDocSubCollection =  async (idUsuario, entity, message ) => {
  return firestoreController.updateDocSubCollection(COLLECTION, idUsuario, entity, message)
}

module.exports = {
  getAllDocs,
  getOneDoc,
  createDoc,
  updateDoc,
  destroyDoc,
  getAllOneFilter,
  updateDocSubCollection
}