module.exports = app => {

  /* Rota para tela inicial */
    app.get('/home', (req, res) => {
      res.render('home/index', {"mensagem": {"mensagem": ''},});
    });
  /* Fim rota para tela inicial */

  /* Rota para tela de lista */
    app.get('/people/new',(req, res) => {
      res.render('people/new', {"mensagem": {"mensagem": ''},});
    });
  /* Fim rota para tela de lista */

  /* Rota para login */
    app.get('/login',(req, res) => {
      res.render('login/login', req.flash());
    });
    
  /* Fim rota para tela de Login */

}
