const logger = require('../../server/logger')
const db = require('../../server/models')// Chamada do arquivo que corresponde a collection

const getAll = async (collection) => {
  await db.model(`${collection}`).find({})
  .then(documents => {
    logger.info(`Getting info for ${collection}`, { scope: 'mongoose'})
    return documents
  })
  .catch(err => {
    logger.error(`Error on fetching \collection '${collection}'`, err, { scope: 'mongoose'})
    throw new Error('FIRESTORE_FETCHING_ERROR')
  })
}

const getOne = async (collection, id) => {
  await db.model(`${collection}`).findById(id)
  .then(document => {
    if(!document.exists){
      logger.warn(`Document '${collection}/${id}' not found`, { scope: 'mongoose'})
    }
    logger.info(`Getting info for ${id}`, { scope: 'mongoose'})
    return document
  }).catch(err => {
    logger.error(`Error on fetching document '${collection}/${id}'`, err, { scope: 'mongoose'})
    //throw new Error('FIRESTORE_FETCHING_ERROR')
  });
}

const getAllFilter = async (collection, filter) => {
  let query = {};

  filter.forEach(function(item, index){
      query[item.column] = item.value;
  });

  return await db.model(`${collection}`).find(query, function(err, documents){
    logger.info(`Getting info for ${documents[0]}`, { scope: 'mongoose'})
  })
  .catch(err => {
    logger.error(`Error on fetching \collection '${collection}'`, err, { scope: 'mongoose'})
    throw new Error('FIRESTORE_FETCHING_ERROR')
  })
}

const create = async (collection, data = {}) => {
  let newDoc = db.model(`${collection}`)
  new newDoc(data).save(function(err, data) {
    if (err) return console.error(err);
      logger.info(`Getting info for ${data}`, { scope: 'mongoose'})
      return data;
  })
  .catch(err => {
    logger.error(`Error on creating document '${collection}/${id}'`, err, { scope: 'mongoose', payload: data })
    //throw new Error('FIRESTORE_CREATE_ERROR')
  });
}

const update = async (collection, data = {}, id ) => {
  db.model(`${collection}`)
  .findByIdAndUpdate(id, data, function(err, data) {
      logger.info(`Document '${collection}/${id}' updated`, {
        scope: 'mongoose',
        payload: data
      })
    })
    .catch(err => {
      logger.error(`Error on updating document '${collection}/${id}'`, err, { scope: 'mongoose', payload: data })
      //throw new Error('FIRESTORE_CREATE_ERROR')
    })
  
}

const destroy = async (collection, id) => {
  db.model(`${collection}`)
  .deleteOne({ _id: id }, function(err) {
    if(err){
      logger.info(`Document '${collection}/${id}' cannot be removed`, {
        scope: 'mongoose', payload: data
      })
      return false;
    }
    logger.info(`Document '${collection}/${id}' removed`, {
      scope: 'mongoose', payload: data
    });
    return true;
  }).catch(err => {
    logger.error(`Error on updating document '${collection}/${id}'`, err, { scope: 'mongoose', payload: data })
    //throw new Error('FIRESTORE_CREATE_ERROR')
  })
}

module.exports = {
  getAll,
  getAllFilter,
  getOne,
  create,
  update,
  destroy
}
