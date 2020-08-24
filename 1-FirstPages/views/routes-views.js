
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

  //Se a pessoa tentar colocar qualquer endereço que não tenha na aplicação, será direcionada para welcome/index
  app.route('/*').get((req, res) => {
    res.status(401).send({ message: 'Pagina não existe!' }); 
  });

}
