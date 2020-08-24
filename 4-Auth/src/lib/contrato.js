const firestoreController = require('../models/firestoreController')
const logger = require('../../server/logger')

const COLLECTION = 'Contrato'

const getAllDocs = async () => await firestoreController.getAll(COLLECTION)

const getOneDoc = async id => firestoreController.getOne(COLLECTION, id)

const getAllOneFilter =  async filter => await firestoreController.getAllOneFilter(COLLECTION, filter)

const createDoc = async (body) => firestoreController.create(COLLECTION, body)

const updateDoc = async (body, id) => firestoreController.update(COLLECTION, body, id)

const destroyDoc = async id => {
  await firestoreController.destroy(COLLECTION, id)
  logger.info(`Document '${COLLECTION}/${id}' deleted!`, { scope: 'lib/funcionario/destroyDoc'})
}

const sendDocEmail = async body => require('../../utils/function')(body)

/* Função: updateDocSubCollection
 * Desc: Função criada para armazenar documentos dentro de um estrutura document/collection
 * Params:
 	- body - contendo as informações do req.body
 	- entity - nome da entidade que está utilizada, por exemplo 'notificacao'
 	- id - do documento do principal
 */
const updateDocSubCollection =  async (idContrato, entity, message ) => {
  return firestoreController.updateDocSubCollection(COLLECTION, idContrato, entity, message )
}

module.exports = {
  getAllDocs,
  getOneDoc,
  createDoc,
  destroyDoc,
  sendDocEmail,
  getAllOneFilter,
  updateDocSubCollection
}