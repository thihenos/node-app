const session = require('../server/utils/functions/jwt')

module.exports = app => {

  /* Rota para tela inicial */
    app.get('/home', session.verifyToken , (req, res) => {
      res.render('home/index', {"mensagem": {"mensagem": ''},});
    });
  /* Fim rota para tela inicial */

  /* Rota para tela de lista */
    app.get('/list/new',(req, res) => {
      res.render('list/new', {"mensagem": {"mensagem": ''},});
    });
  /* Fim rota para tela de lista */

    /* Rota para login */
    app.get('/login/reset',(req, res) => {
      res.render('login/reset-password');
    });
    app.get('/login',(req, res) => {
      res.render('login/login', req.flash());
    });
    app.get('/logout', (req, res) => {
      res.render('login/login', req.flash());
    });
    app.get('/login/new-password',(req, res) => {
      res.render('login/new-password');
    });
    app.get('/login/reset-status',(req, res) => {
      res.render('login/resetOK', { 'mensagem': req.flash('message') } );
    });
    //app.get('/home', (req, res) => {
    //  res.render('welcome/home', {"userInfo": {"name": req.session.passport.user.nome, "login": req.session.passport.user.nome},})
    //});
  /* Fim rota para tela de Login */


  //Se a pessoa tentar colocar qualquer endereço que não tenha na aplicação, será direcionada para welcome/index
  app.route('/*').get((req, res) => {
    res.render('login/login', { message : req.flash('message')});
  });

}
