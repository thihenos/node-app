const logger = require('../../server/logger')
const asyncHandler = require('../helpers/asyncHandler')
const lib = require('../lib/login')
const util = require('../lib/util')

const getAllOneFilter = asyncHandler(async (req, res) => {
  try {
    return await lib.getAllOneFilter(body);
  } catch (err) {
    logger.warn('Error getting documents', err, { scope: 'services/login' });
  }
})

const auth = asyncHandler(async (req, res) => {
  try {
    return await lib.getAllOneFilter(body);
  } catch (err) {
    logger.warn('Error getting documents', err, { scope: 'services/login' });
  }
})


const newPassword = asyncHandler(async (req, res) => {

})

const resetPassword = asyncHandler(async (req, res) => {

})

const validateToken = asyncHandler(async (req, res) => {

})

const destroySession = asyncHandler(async (req, res) => {

})

const validateUser = asyncHandler(async (req, res) => {

  logger.info('Checking user ', req.body.username, { scope: 'mobile/login'})
  const token = await lib.checkUser(req.body);
  if(!token){
    req.flash('message', 'Login ou senha errados!')
    res.redirect('/login');
  }
  req.session['web-app-auth'] = token;
  res.redirect('/home');
})

module.exports = {
  auth,
  getAllOneFilter,
  resetPassword,
  validateToken,
  newPassword,
  validateUser,
  destroySession
}
