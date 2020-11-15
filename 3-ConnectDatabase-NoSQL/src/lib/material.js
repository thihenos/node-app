const mongooseController = require('../models/mongoose')
const COLLECTION = 'Material'

const getAll = async => mongooseController.getAll(COLLECTION)

const getOneDoc = async id => mongooseController.getOneById(COLLECTION, id)

const createDoc = async data => mongooseController.create(COLLECTION, data)

const updateDoc = async (data, id) => mongooseController.update(COLLECTION, data, id)

const deleteDoc = async id => mongooseController.delete(COLLECTION, id)

module.exports = {
  deleteDoc,
  updateDoc,
  createDoc,
  getOneDoc,
  getAll
}
