const asyncHandler = require('../helpers/asyncHandler')
const lib = require('../lib/material');
const cons = require('consolidate');

const getAllDocs = asyncHandler(async (req, res) => {
  try {
    const data = await lib.getAllDocs(req.body)
    res.status(200).json(data)
  } catch (err) {
    throw err
  }
})

const createDoc = asyncHandler(async (req, res) => {
  try {
    await lib.createDoc(req.body)
    res.status(201).json({ "message" : "Documento criado" })
  } catch (err) {
    throw err
  }
})

const updateDoc = asyncHandler(async (req, res) => {
  try {
    await lib.updateDoc(req.body, req.params.id)
    res.status(201).json({ "message" : "Documento atualizado" })
  } catch (err) {
    throw err
  }
})

const deleteDoc = asyncHandler(async (req, res) => {
  lib.deleteDoc(req.params.id)
  res.status(200).json({ "message" : "Documento excluido" })
})

const getOneDoc = asyncHandler(async (req, res) => {
  const document = lib.getOneDoc(req.params.id)
  res.status(200).json(document)
})

module.exports = {
createDoc,
getOneDoc,
updateDoc,
deleteDoc,
getAllDocs
}
