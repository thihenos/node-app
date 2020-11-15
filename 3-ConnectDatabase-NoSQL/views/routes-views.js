
module.exports = app => {

  /* Rota para tela inicial */
    app.get('/', (req, res) => {
      res.render('home/index');
    });
  /* Fim rota para tela inicial */

  /* Rota para tela de lista */
    app.get('/material/new',(req, res) => {
      res.render('material/new');
    });
  /* Fim rota para tela de lista */


}
