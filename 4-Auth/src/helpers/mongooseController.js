const db = require('../../server/models')// Chamada do arquivo de conexao com banco de dados
const logger = require('../../server/logger')

const getAll = async (collection) => {
  db.collection.findAll().then(function(result) {
    logger.info(`Getting info for ${collection}`, { scope: 'mongoose'})
    return result
  }).catch(err => {
    logger.error(`Error on fetching mongoose collection '${collection}'`, err, { scope: 'mongoose'})
    //throw new Error('FIRESTORE_FETCHING_ERROR')
  })
}

const getOne = async (collection, id) => {
  db.collection.findById(id).then(function(result) {
    logger.info(`Getting info for ${collection}`, { scope: 'mongoose'})
    return result
  }).catch(err => {
    logger.error(`Error on fetching mongoose collection '${collection}'`, err, { scope: 'mongoose'})
    //throw new Error('FIRESTORE_FETCHING_ERROR')
  })
}

const getAllOneFilter = async (collection, filter) => {
  db.collection.find({ where: filter }).then(function(result) {
    if (result) {
      logger.info(`Getting info for ${collection}`, filter, { scope: 'mongoose'})
      return result;
    }
    logger.warn(`Document '${collection}' not found`, { scope: 'mongoose'})
    //throw new Error('FIRESTORE_NOT_FOUND')
  }).catch(err => {
    logger.error(`Error on fetching mongoose collection '${collection}'`, err, { scope: 'mongoose'})
    //throw new Error('FIRESTORE_FETCHING_ERROR')
  })
}

const create = async (collection, data = {}) => {
  db.collection.create(data).then(function(result) {
    logger.info(`Document '${collection}' created`, {
      scope: 'mongoose',
      payload: data
    })
    return {result}
  }, function (error) {
    logger.error(`Error on creating document '${collection}'`, err, { scope: 'mongoose', payload: data })
  });
}

const update = async (collection, data = {}, id ) => {
  //Finding by ID param
  db.collection.findById(id).then(function(result) {
    if (result) {   
      logger.info(`Document '${collection}/${id}' updated`, {
        scope: 'mongoose',
        payload: data
      })
      result.updateAttributes(data).then(function(resultUpdate) {
      }, function (error) {
        logger.error(`Error on updating document '${collection}/${id}'`, err, { scope: 'mongoose', payload: data })
      });
    }
  })
}

const destroy = async (collection, id) => {
  db.collection.destroy({ where: { id: req.param('id') } }).then(function() {
  }, function (error) {
    logger.error(`Error on deleting document '${collection}/${id}'`, err, { scope: 'firestore' })
  });
}

module.exports = {
  getAll,
  getAllOneFilter,
  getAllManyFilter,
  getOne,
  create,
  update,
  destroy
}
