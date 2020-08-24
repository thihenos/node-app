// let nodemailer = require('nodemailer')
// const logger = require('../../../../server/logger')

// const sendToken = async (p_email,p_token) => {

// let transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com', // hostname
//   secure: true, // use SSL
//   port: 465, // port for secure SMTP
//   auth: {
//     user: 'melestudo.suporte@gmail.com',
//     pass: 'Mel.app2016'
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// })

// Após configurar o transporte chegou a hora de criar um e-mail
// para enviarmos, para isso basta criar um objeto com algumas configurações
// let emailConfig = {
//   from: 'onlife_suporte@onlife.com', // Quem enviou este e-mail
//   to: p_email, // Quem receberá dados.email
//   subject: 'OnLife - Reset de senha',  // Um assunto bacana :-)
//   html:
//   '<p>Foi solicitado um reset de email recentemente e estamos enviando esse \
//   <a href=\'www.localhost:3000/funcionario/reset_pass/token/'+p_token+'\'>link</a> <br> e insira o token para que você consiga efetuar o reset da sua senha. \
//   <br><br>E-mail foi enviado por <strong>Equip OnLife Suporte</strong>' // O conteúdo do e-mail
// }

// transporter.sendMail(emailConfig, function(error, info){
//   if(error){
//     logger.error(`there was an error :-(, and it was this: '${error.message}'`, error.message, { scope: 'sendEmail'})
//     return false
//   }else{
//     logger.info(`Message sent: ${info.response}`, { scope: 'sendEmail' })
//     return true
//   }
// })


// module.exports = {
//   sendToken
// }