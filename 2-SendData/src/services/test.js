const returnJson = (req, res) => {
  res.status(200).send({ "example" : "retorno de dados"})
}
  
module.exports = {
  returnJson
}
  