const logger = require('../../server/logger')
const asyncHandler = require('../helpers/asyncHandler')
const lib = require('../lib/user')

const createDoc = asyncHandler(async (req, res) => {
  new Promise((resolve, reject) => {
    lib.getAllOneFilter({'filter' : 'email', 'data' : req.body.email}).then((result)=>{
      if(!result.empty) reject(result);
      resolve();
    })
  })
  .then(() => {          
    let uniqid = require('uniqid')//Biblioteca para geração de ID's para os documentos do Firestore
    let auxSenha = uniqid();//Criando senha aleatória
    req.body.password = auxSenha; //Criptografando senha
    lib.createDoc(req.body).then((result)=>{
      req.flash('message', 'Perfil criado com sucesso!')
      res.redirect('/login')
    })
  })
  .catch((result) => {
    req.flash('message', `O email ja está sendo utilizado!`)
    res.render('/sign-up')
  });
})


module.exports = {
  createDoc
}
