const jwt = require('jsonwebtoken')
const fs = require('fs')
const privateKey = fs.readFileSync('./server/secure/onLiveSecret.pem').toString()
const logger = require('../../logger')

const createToken = ( id, email ) => {
  return jwt.sign({
    id, email
  }, new Buffer.from(privateKey, 'base64'), { expiresIn : Math.floor(Date.now() / 1000) + (60 * 60) });
}
const verifyToken = async (req, res, next) => {
  await new Promise((resolve, reject) => {
    let token = req.session['web-app-auth'];
    
    if (!token) 
        return res.status(401).send({ auth: false, message: 'Usuário não autorizado.' }); 
    
    jwt.verify(token, new Buffer.from(privateKey, 'base64'), function(err, decoded) {
        if (err){
          reject('TOKEN_INVALID')
          logger.error('Token is invalid', err, { scope: 'JWTVerify' })
          return res.status(500).send({ auth: false, message: 'Autenticação inválida.' }); 
        }
        req.userId = decoded.id; 
        next(); 
    });
  })
}

module.exports = {
  createToken,
  verifyToken,
  privateKey
}