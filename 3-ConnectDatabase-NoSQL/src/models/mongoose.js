const db = require('../../server/models')// Chamada do arquivo que corresponde a collection

const getAll = async (collection, sort) => {
  return await db.model(`${collection}`).find({}).sort(sort)
}

const getOneById = async (collection, id) => {
  await db.model(`${collection}`).findById(id)
  .then(document => {
    if(!document.exists){
    }
    return document
  }).catch(err => {
  });
}

const create = async (collection, data = {}) => {
  let newDoc = db.model(`${collection}`)
  new newDoc(data).save(function(err, data) {
      if (err) {
      }
      console.log(`${collection} created with ${data}`)
  });
}

const update = async (collection, data = {}, id ) => {
  db.model(`${collection}`)
  .findByIdAndUpdate(id, data, function(err, data) {
    })
    .catch(err => {
    })
}

const destroy = async (collection, id) => {
  db.model(`${collection}`)
  .deleteOne({ _id: id }, function(err) {
    if(err){
      return false;
    }
    return true;
  }).catch(err => {
  })
}

module.exports = {
  getAll,
  getOneById,
  create,
  update,
  destroy
}
