let nodemailer = require('nodemailer')
const logger = require('../../../../server/logger')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // hostname
  secure: true, // use SSL
  port: 465, // port for secure SMTP
  auth: {
    user: 'melestudo.suporte@gmail.com',
    pass: 'Mel.app2016'
  },
  tls: {rejectUnauthorized: false}
})

const simpleEmail = async (p_message) => {
  console.log(p_message)
  // Após configurar o transporte chegou a hora de criar um e-mail
  // para enviarmos, para isso basta criar um objeto com algumas configurações
  let emailConfig = {
    from: 'onlife_suporte@onlife.com', // Quem enviou este e-mail
    to: `${p_message.para}`, // Quem receberá dados.email
    subject: `OnLife - ${p_message.titulo}`,  // Um assunto bacana :-)
    html:
    `<p>${p_message.data}</p>
    <br><br>E-mail foi enviado por <strong>Equip OnLife Suporte</strong>` // O conteúdo do e-mail
  }

  transporter.sendMail(emailConfig, function(error, info){
    if(error){
      logger.error(`there was an error :-(, and it was this: '${error.message}'`, error.message, { scope: 'sendEmail'})
    }else{
      logger.info(`Message sent: ${info.response}`, { scope: 'sendEmail' })
    }
  })
}

const sendTokenResetPassword = async (p_email,p_token) => {

  // Após configurar o transporte chegou a hora de criar um e-mail
  // para enviarmos, para isso basta criar um objeto com algumas configurações
  let emailConfig = {
    from: 'onlife_suporte@onlife.com', // Quem enviou este e-mail
    to: p_email, // Quem receberá dados.email
    subject: 'OnLife - Reset de senha',  // Um assunto bacana :-)
    html:
    `<p>Foi solicitado um reset de email recentemente e estamos enviando esse <a href="https://onlife-254123.appspot.com/login/new-password">link</a>\
        e insira o <strong>token</strong> ${p_token} para que você consiga efetuar o reset da sua senha.</p> \
    <br><br>E-mail foi enviado por <strong>Equip OnLife Suporte</strong>` // O conteúdo do e-mail
  }

  transporter.sendMail(emailConfig, function(error, info){
    if(error){
      logger.error(`there was an error :-(, and it was this: '${error.message}'`, error.message, { scope: 'sendEmail'})
    }else{
      logger.info(`Message sent: ${info.response}`, { scope: 'sendEmail' })
    }
  })
}

module.exports = {
  simpleEmail,
  sendTokenResetPassword
}