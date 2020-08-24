/* Descrição: Script criado para criptografar qualquer string
 * Parametros: text
 	 		   - enviado do via chamada do script, exemplo: require('/.function/crypt')(parametro);
 * Author: Thiago Silva
 */

//Biblioteca de criptografia
const crypto = require('crypto')

const setCrypt = (async (text) => {
   //Criando criptografia para texto
  const cipher = crypto.createCipher('aes192', 'onlife')
  //Criptografando a string 123456
  let crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex')

  return crypted || ''
})

const getCrypt = (async (text) => {
  //Criando decriptografia para texto
  const decipher = crypto.createDecipher('aes192', 'onlife')
  //Decriptografando a string 123456
  let dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8')

  return dec || ''
})

module.exports = {
  getCrypt,setCrypt
}