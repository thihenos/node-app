const mongooseController = require('../models/mongoose')
const COLLECTION = 'Material'

const getAll = async => mongooseController.getAll(COLLECTION)

const getOneDoc = async id => mongooseController.getOneDoc(COLLECTION, id)

const createDoc = async data => mongooseController.create(COLLECTION, data)

const updateDoc = async data => mongooseController.updateDoc(COLLECTION, data)

const deleteDoc = async id => mongooseController.deleteDoc(COLLECTION, id)

module.exports = {
  deleteDoc,
  updateDoc,
  createDoc,
  getOneDoc,
  getAll
}
