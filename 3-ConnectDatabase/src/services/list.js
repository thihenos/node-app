const logger = require('../../server/logger')
const asyncHandler = require('../helpers/asyncHandler')
//const lib = require('../lib/funcionario')
//const token = require('../lib/token')
//const util = require('../lib/util')
//const transform = require('../builders/transformDoc')

const createDoc = asyncHandler(async (req, res) => {
  //console.log(req.body)
  console.log('teste')
})


module.exports = {
  createDoc
}